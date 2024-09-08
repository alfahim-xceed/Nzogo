import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCountryListQuery } from "../../../services/country_api";
import { useCreateEmbassyMutation } from '../../../services/embassy_api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    phone_number: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    website_url: Yup.string().url('Invalid URL format'),
    work_schedule: Yup.string().required('Work schedule is required'),
    country_id: Yup.string().required('Country is required'),
});

const CreateEmbassy = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const { data: countryList, isLoading, error } = useGetCountryListQuery();
    const [createEmbassy] = useCreateEmbassyMutation();

    const initialValues = {
        name: "",
        address: "",
        phone_number: "",
        email: "",
        website_url: "",
        work_schedule: "",
        country_id: id
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await createEmbassy(values).unwrap();
            toast.success('Embassy created successfully');

        } catch (error) {
            toast.error('Failed to create embassy');
        } finally {
            setSubmitting(false);
        }
    };

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        console.error("Error fetching countries:", error);
        return <>Error fetching countries</>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create New Embassy</h1>
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
                                placeholder="Enter embassy name"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="address" className="text-gray-700 mb-2">Address</label>
                            <Field
                                id="address"
                                name="address"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter address"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone_number" className="text-gray-700 mb-2">Phone Number</label>
                            <Field
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter phone number"
                            />
                            <ErrorMessage name="phone_number" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter email address"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="website_url" className="text-gray-700 mb-2">Website URL</label>
                            <Field
                                id="website_url"
                                name="website_url"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter website URL"
                            />
                            <ErrorMessage name="website_url" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="work_schedule" className="text-gray-700 mb-2">Work Schedule</label>
                            <Field
                                id="work_schedule"
                                name="work_schedule"
                                as="textarea"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter work schedule"
                                rows="4"
                            />
                            <ErrorMessage name="work_schedule" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="country_id" className="text-gray-700 mb-2">Country</label>
                            <Field
                                id="country_id"
                                name="country_id"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Country</option>
                                {countryList?.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="country_id" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Create Embassy
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateEmbassy;
