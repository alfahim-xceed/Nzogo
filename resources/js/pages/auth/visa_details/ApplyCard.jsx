import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Define validation schema using Yup
const validationSchema = Yup.object({
    visaType: Yup.string().required('Visa type is required'),
    services: Yup.string().required('Service is required'),
    travelDate: Yup.date().required('Travel date is required').nullable()
});

const ApplyCard = () => {
    const navigate = useNavigate();

    const initialValues = {
        visaType: '',
        services: '',
        travelDate: null
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            console.log('Submitted values:', values);
            // Here you can handle form submission, e.g., send values to your API

            toast.success('Application submitted successfully');
            resetForm();
            navigate('/profile'); // Redirect after successful submission (optional)
        } catch (error) {
            toast.error(error.message || 'An error occurred');
        }
    };

    return (

            <div className="flex flex-col items-center justify-center px-9 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="px-6  sm:p-8">
                        <h5 className="text-xl font-medium text-dark-900">Work / Employment</h5>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue, values }) => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="visaType" className="block mb-2 text-sm font-medium text-gray-900">Visa Type</label>
                                        <Field as="select" name="visaType" id="visaType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                                            <option value="">Select Visa Type</option>
                                            <option value="Tourist">Tourist</option>
                                            <option value="Business">Business</option>
                                            <option value="Student">Student</option>
                                            {/* Add more options as needed */}
                                        </Field>
                                        <ErrorMessage name="visaType" component="div" className="text-red-500 mt-1" />
                                    </div>



                                    <div>
                                        <label htmlFor="services" className="block mb-2 text-sm font-medium text-gray-900">Services</label>
                                        <Field as="select" name="services" id="services" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                                            <option value="">Select Service</option>
                                            <option value="Consultation">Consultation</option>
                                            <option value="Document Review">Document Review</option>
                                            <option value="Application Assistance">Application Assistance</option>
                                            {/* Add more options as needed */}
                                        </Field>
                                        <ErrorMessage name="services" component="div" className="text-red-500 mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="travelDate" className="block mb-2 text-sm font-medium text-gray-900">Travel Date</label>
                                        <DatePicker
                                            selected={values.travelDate}
                                            onChange={date => setFieldValue('travelDate', date)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            dateFormat="yyyy/MM/dd"
                                            placeholderText="Select a date"
                                        />
                                        <ErrorMessage name="travelDate" component="div" className="text-red-500 mt-1" />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Apply
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

    );
};

export default ApplyCard;
