import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Define validation schema using Yup
const validationSchema = Yup.object({
    visaType: Yup.string().required('Visa type is required'),
    services: Yup.array().of(Yup.string()).required('At least one service is required'),
    travelDate: Yup.date().required('Travel date is required').nullable()
});

const ApplyCard = ({ data }) => {
    const navigate = useNavigate();
    const [totalFee, setTotalFee] = useState(0);

    const initialValues = {
        visaType: '',
        services: [], // Ensure this is an array
        travelDate: null
    };

    // Function to calculate the total fee
    const calculateTotalFee = (visaTypeId, serviceIds) => {
        let fee = 0;

        // Ensure serviceIds is an array
        const validServiceIds = Array.isArray(serviceIds) ? serviceIds : [];

        // Add fees for selected services
        validServiceIds.forEach(serviceId => {
            const service = data.visa_details_service.find(s => s.service.id === parseInt(serviceId));
            if (service) {
                fee += parseFloat(service.fee);
            }
        });

        // Add fee for the selected visa type
        if (visaTypeId) {
            const visaType = data.visa_details_visa_types.find(vt => vt.visa_type.id === parseInt(visaTypeId));
            if (visaType) {
                fee += parseFloat(visaType.fee);
            }
        }

        setTotalFee(fee);
    };

    const handleCheckboxChange = (e, setFieldValue, values) => {
        const { value, checked } = e.target;
        console.log("Current values:", values, "Checked value:", value);

        setFieldValue('services', prevServices => {
            // Ensure previous services is always an array
            const currentServices = Array.isArray(prevServices) ? prevServices : [];
            console.log("Previous services:", currentServices);

            // Convert value to string to match the type used in services array
            const stringValue = value.toString();

            // Update the services array based on checkbox state
            const updatedServices = checked
                ? [...currentServices, stringValue] // Add service ID if checked
                : currentServices.filter(service => service !== stringValue); // Remove service ID if unchecked

            // Recalculate total fee with updated services
            calculateTotalFee(values.visaType, updatedServices);

            console.log("Updated services:", updatedServices);

            // Return the updated services array
            return updatedServices;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center px-9 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                <div className="px-6 sm:p-8">
                    <h5 className="text-xl font-medium text-dark-900">Total Fee: Tk {totalFee.toFixed(2)}</h5>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                console.log('Submitted values:', values);
                                // Handle form submission here

                                toast.success('Application submitted successfully');
                                resetForm();
                                navigate('/profile'); // Redirect after successful submission (optional)
                            } catch (error) {
                                toast.error(error.message || 'An error occurred');
                            }
                        }}
                    >
                        {({ setFieldValue, values }) => (
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="visaType" className="block mb-2 text-sm font-medium text-gray-900">Visa Type</label>
                                    <Field as="select" name="visaType" id="visaType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        onChange={(e) => {
                                            const selectedVisaType = e.target.value;
                                            setFieldValue('visaType', selectedVisaType);
                                            calculateTotalFee(selectedVisaType, values.services); // Recalculate fee
                                        }}>
                                        <option value="">Select Visa Type</option>
                                        {data.visa_details_visa_types.map(vt => (
                                            <option key={vt.visa_type.id} value={vt.visa_type.id}>
                                                {`${vt.visa_type.name} (Fee: ${vt.fee} ${vt.currency})`}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="visaType" component="div" className="text-red-500 mt-1" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Services</label>
                                    <div className="flex flex-col">
                                        {data.visa_details_service.map(vs => (
                                            <label key={vs.service.id} className="flex items-center mb-2">
                                                <input
                                                    type="checkbox"
                                                    name="services"
                                                    value={vs.service.id}
                                                    className="form-checkbox h-4 w-4 text-primary-600"
                                                    checked={Array.isArray(values.services) && values.services.includes(vs.service.id.toString())}
                                                    onChange={(e) => handleCheckboxChange(e, setFieldValue, values)} // Pass values here
                                                />
                                                <span className="ml-2 text-gray-900 text-sm">{`${vs.service.name} (Fee: ${vs.fee} ${vs.currency})`}</span>
                                            </label>
                                        ))}
                                    </div>
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
