import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useGetUserDetailsQuery } from '../../services/api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number must be 10 digits'),
});

const ManageProfile = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const { data: details, error, isLoading } = useGetUserDetailsQuery();

    useEffect(() => {
        if (details) {
            setInitialValues({
                name: details.name || '',
                email: details.email || '',
                phone: details.phone || '',
            });
        }
    }, [details]);

    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission
        console.log('Form Data:', values);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user details.</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Profile</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
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
                                placeholder="Enter your name"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-gray-700 mb-2">Phone</label>
                            <Field
                                id="phone"
                                name="phone"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <FontAwesomeIcon icon={faSave} className="mr-2" />
                            Save Changes
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ManageProfile;
