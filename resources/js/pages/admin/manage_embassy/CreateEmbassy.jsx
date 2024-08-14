import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Example options for select fields
const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    // Add more countries as needed
];



// Define validation schema using Yup
const validationSchema = Yup.object({
    country: Yup.string().required('Country is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    website_url: Yup.string().url('Invalid URL format'),
    work_schedule: Yup.string().required('Work schedule is required')
});

const CreateEmbassy = () => {
    const navigate = useNavigate();

    const initialValues = {
        country: "",
        phone: "",
        email: "",
        website_url: "",
        work_schedule: ""
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        // Handle form submission logic here
        console.log(values);
        setSubmitting(false);
        toast.success('Embassy created successfully');
        navigate('/admin/embassy-list'); // Redirect after successful submission
    };

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
                            <label htmlFor="country" className="text-gray-700 mb-2">Country</label>
                            <Field
                                id="country"
                                name="country"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Country</option>
                                {countryOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="country" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-gray-700 mb-2">Phone</label>
                            <Field
                                id="phone"
                                name="phone"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter phone number"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
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
                                rows="4" // Adjust the number of rows as needed
                            />
                            <ErrorMessage name="work_schedule" component="div" className="text-red-500 mt-1" />
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
}

export default CreateEmbassy;
