import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Define validation schema using Yup
const validationSchema = Yup.object({
    passport_given_name: Yup.string().required('Given name is required'),
    passport_surname: Yup.string().required('Surname is required'),
    passport_number: Yup.string().required('Passport number is required'),
    passport_expiry_date: Yup.date().required('Passport expiry date is required').nullable(),
    date_of_birth: Yup.date().required('Date of birth is required').nullable(),
});

const ManagePassport = () => {
    const initialValues = {
        passport_given_name: '',
        passport_surname: '',
        passport_number: '',
        passport_expiry_date: null,
        date_of_birth: null,
    };

    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission
        console.log('Form Data:', values);
        resetForm(); // Optionally reset the form after submission
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Passport</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="passport_given_name" className="text-gray-700 mb-2">Given Name</label>
                            <Field
                                id="passport_given_name"
                                name="passport_given_name"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter given name"
                            />
                            <ErrorMessage name="passport_given_name" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="passport_surname" className="text-gray-700 mb-2">Surname</label>
                            <Field
                                id="passport_surname"
                                name="passport_surname"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter surname"
                            />
                            <ErrorMessage name="passport_surname" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="passport_number" className="text-gray-700 mb-2">Passport Number</label>
                            <Field
                                id="passport_number"
                                name="passport_number"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter passport number"
                            />
                            <ErrorMessage name="passport_number" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="passport_expiry_date" className="text-gray-700 mb-2">Passport Expiry Date</label>
                            <DatePicker
                                selected={values.passport_expiry_date}
                                onChange={(date) => setFieldValue('passport_expiry_date', date)}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholderText="Select expiry date"
                                dateFormat="yyyy/MM/dd"
                            />
                            <ErrorMessage name="passport_expiry_date" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="date_of_birth" className="text-gray-700 mb-2">Date of Birth</label>
                            <DatePicker
                                selected={values.date_of_birth}
                                onChange={(date) => setFieldValue('date_of_birth', date)}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholderText="Select date of birth"
                                dateFormat="yyyy/MM/dd"
                            />
                            <ErrorMessage name="date_of_birth" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
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

export default ManagePassport;
