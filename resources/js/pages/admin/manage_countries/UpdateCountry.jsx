import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useGetCountryDetailsQuery, useUpdateCountryMutation } from '../../../services/country_api';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    flag_img_url: Yup.string().url('Invalid URL format').nullable(), // Validate flag_img_url as a URL if provided
});

const UpdateCountry = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: details, isLoading, error } = useGetCountryDetailsQuery(id);
    const [updateCountry] = useUpdateCountryMutation();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-gray-700">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-lg">Error loading country details. Please try again later.</p>
            </div>
        );
    }

    // Ensure details is defined before setting initial values
    const initialValues = {
        name: details ? details.name : '',
        flag_img_url: details ? details.flag_img_url : '',
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await updateCountry({ id, ...values }).unwrap();
            resetForm();
            toast.success('Country updated successfully.');
            navigate('/admin/country-list');
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Failed to update country');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Country</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter country name"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="flag_img_url" className="text-gray-700 mb-2">Flag Image URL</label>
                            <Field
                                id="flag_img_url"
                                name="flag_img_url"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter flag image URL"
                            />
                            <ErrorMessage name="flag_img_url" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faEdit} className="mr-2" />
                            Update Country
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateCountry;
