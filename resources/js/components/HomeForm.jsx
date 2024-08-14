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

const visaCategoryOptions = [
    { value: 'tourist', label: 'Tourist' },
    { value: 'business', label: 'Business' },
    // Add more visa categories as needed
];

// Define validation schema using Yup
const validationSchema = Yup.object({
    travelling_to: Yup.string().required('It is required'),
    visa_category: Yup.string().required('It is required')
});

const HomeForm = () => {
    const navigate = useNavigate();

    const initialValues = {
        travelling_to: "",
        visa_category: ""
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        // Handle form submission logic here
        console.log(values);
        setSubmitting(false);
        toast.success('Form submitted successfully');
        navigate('/success'); // Redirect after successful submission
    };

    return (
        <div className="w-[50%] mx-auto my-10">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex items-end space-x-4">
                        {/* Field container with fixed height */}
                        <div className="flex flex-col w-1/3">
                            <label htmlFor="travelling_to" className="text-gray-700 mb-2">Travelling To</label>
                            <Field
                                id="travelling_to"
                                name="travelling_to"
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
                            <div className="h-6"> {/* Fixed height container for error message */}
                                <ErrorMessage name="travelling_to" component="div" className="text-red-500" />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/3">
                            <label htmlFor="visa_category" className="text-gray-700 mb-2">Visa Category</label>
                            <Field
                                id="visa_category"
                                name="visa_category"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Visa Category</option>
                                {visaCategoryOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <div className="h-6"> {/* Fixed height container for error message */}
                                <ErrorMessage name="visa_category" component="div" className="text-red-500" />
                            </div>
                        </div>

                        <div className="flex items-end mb-6"> {/* Ensure no extra margin */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            >

                                Check Details
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default HomeForm;
