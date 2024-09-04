import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateVisaApplicationMutation } from '../../services/visa_application_api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    visaType: Yup.string().required('Visa type is required'),
    services: Yup.array().of(Yup.string()).min(1, 'At least one service is required'),
    travelDate: Yup.date().required('Travel date is required').nullable()
});

const ApplyCard = ({ data }) => {
    const navigate = useNavigate();
    const [totalFee, setTotalFee] = useState(0);
    const [createVisaApplication] = useCreateVisaApplicationMutation();

    const initialValues = {
        visaType: '',
        services: [],
        travelDate: null
    };

    // Function to calculate the total fee
    const calculateTotalFee = (visaTypeId, serviceIds) => {
        let fee = 0;
        const validServiceIds = Array.isArray(serviceIds) ? serviceIds : [];

        validServiceIds.forEach(serviceId => {
            const service = data.country.find(countryData =>
                countryData.service && countryData.id === parseInt(serviceId, 10)
            );
            if (service) {
                fee += parseFloat(service.fee);
            }
        });

        if (visaTypeId) {
            const visaType = data.visa.find(visaData =>
                visaData.type && visaData.type.id === parseInt(visaTypeId, 10)
            );
            if (visaType) {
                fee += parseFloat(visaType.fee);
            }
        }

        setTotalFee(fee);
    };

    const handleCheckboxChange = (e, setFieldValue, values) => {
        const { value, checked } = e.target;
        const updatedServices = checked
            ? [...values.services, value]
            : values.services.filter(service => service !== value);

        setFieldValue('services', updatedServices);
        calculateTotalFee(values.visaType, updatedServices);
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const { visaType, travelDate, services } = values;
            const visa_id = data.visa.find(v => v.type.id === parseInt(visaType, 10))?.id;

            await createVisaApplication({
                visa_type_id: visaType,
                visa_service_ids: services,
                visa_id,
                travel_date: travelDate
            }).unwrap();

            toast.success('Application submitted successfully');
            resetForm();
            navigate("/user/applied-visa-list");

        } catch (error) {
            toast.error(error.message || 'An error occurred');
        }
    };

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
                                            const selectedVisaType = e.target.value;
                                            setFieldValue('visaType', selectedVisaType);
                                            calculateTotalFee(selectedVisaType, values.services);
                                        }}>
                                        <option value="">Select Visa Type</option>
                                        {data.visa.map(vt => (
                                            <option key={vt.type.id} value={vt.type.id}>
                                                {`${vt.type.name} (Fee: ${vt.fee} ${vt.currency})`}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="visaType" component="div" className="text-red-500 mt-1" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Services</label>
                                    <div className="flex flex-col">
                                        {data.country.map(countryData => (
                                            countryData.service && (
                                                <label key={countryData.id} className="flex items-center mb-2">
                                                    <input
                                                        type="checkbox"
                                                        name="services"
                                                        value={countryData.id}
                                                        className="form-checkbox h-4 w-4 text-primary-600"
                                                        checked={values.services.includes(countryData.id.toString())}
                                                        onChange={(e) => handleCheckboxChange(e, setFieldValue, values)}
                                                    />
                                                    <span className="ml-2 text-gray-900 text-sm">{`${countryData.service.name} (Fee: ${countryData.fee} ${countryData.currency})`}</span>
                                                </label>
                                            )
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
