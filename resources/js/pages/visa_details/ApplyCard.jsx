import React, { useState, useEffect } from 'react';
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
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalFee, setTotalFee] = useState(0);

    const initialValues = {
        visaType: '',
        services: [],
        travelDate: null
    };

    // Function to calculate the total fee
    const calculateTotalFee = (visaTypeId, serviceIds) => {
        let fee = 0;

        // Add fees for selected services
        serviceIds.forEach(serviceId => {
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

    useEffect(() => {
        // Recalculate the total fee when visaType or selectedServices change
        calculateTotalFee(initialValues.visaType, selectedServices);
    }, [initialValues.visaType, selectedServices]);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            console.log('Submitted values:', values);
            // Handle form submission here

            toast.success('Application submitted successfully');
            // resetForm();
            // navigate('/profile'); // Redirect after successful submission (optional)
        } catch (error) {
            toast.error(error.message || 'An error occurred');
        }
    };

    // Map data to options for selects
    const visaTypeOptions = data.visa_details_visa_types.map(vt => ({
        value: vt.visa_type.id,
        label: `${vt.visa_type.name} (Fee: ${vt.fee} ${vt.currency})`
    }));

    const serviceOptions = data.visa_details_service.map(vs => ({
        value: vs.service.id,
        label: `${vs.service.name} (Fee: ${vs.fee} ${vs.currency})`
    }));

    return (
        <div className="flex flex-col items-center justify-center px-9 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                <div className="px-6 sm:p-8">
                    <h5 className="text-xl font-medium text-dark-900">Total Fee: Tk {totalFee.toFixed(2)}</h5>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue, values }) => (
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="visaType" className="block mb-2 text-sm font-medium text-gray-900">Visa Type</label>
                                    <Field as="select" name="visaType" id="visaType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        onChange={(e) => {
                                            setFieldValue('visaType', e.target.value);
                                            calculateTotalFee(e.target.value, values.services); // Recalculate fee
                                        }}>
                                        <option value="">Select Visa Type</option>
                                        {visaTypeOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="visaType" component="div" className="text-red-500 mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="services" className="block mb-2 text-sm font-medium text-gray-900">Services</label>
                                    <Field as="select" name="services" id="services" multiple className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        onChange={(e) => {
                                            const options = Array.from(e.target.options);
                                            const selectedValues = options.filter(option => option.selected).map(option => option.value);
                                            setFieldValue('services', selectedValues);
                                            setSelectedServices(selectedValues); // Update selected services
                                            calculateTotalFee(values.visaType, selectedValues); // Recalculate fee
                                        }}>
                                        {serviceOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
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
