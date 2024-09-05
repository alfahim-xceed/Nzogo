import React from 'react';
import { useGetCountryListQuery } from "../../../services/country_api";
import { useGetVisaCategoryListListQuery } from "../../../services/visa_category_api";
import { useGetServiceListQuery } from "../../../services/service_api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateCountryServiceMutation } from '../../../services/country_service_api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AddCountryService = () => {
    const { data: countries = [], isLoading: isCountriesLoading } = useGetCountryListQuery();
    const { data: categories = [], isLoading: isCategoriesLoading } = useGetVisaCategoryListListQuery();
    const { data: services = [], isLoading: isServicesLoading } = useGetServiceListQuery();

    const [createCountryService] = useCreateCountryServiceMutation();

    const {id}=useParams();

    const initialValues = {
        service_id: '',
        category_id: '',
        country_id: id,
        fee: '',
        currency: ''
    };

    const validationSchema = Yup.object({
        service_id: Yup.string().required('Service is required'),
        category_id: Yup.string().required('Category is required'),
        country_id: Yup.string().required('Country is required'),
        fee: Yup.string().required('Fee is required'),
        currency: Yup.string().required('Currency is required'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await createCountryService(values).unwrap();
            toast.success("Country service added successfully.");
            resetForm();
        } catch (err) {
            console.error(err);
            toast.error("Failed to add country service.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Country Service</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="service_id" className="block text-sm font-medium text-gray-700">Service</label>
                        <Field as="select" id="service_id" name="service_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="" label="Select Service" />
                            {isServicesLoading ? (
                                <option value="" label="Loading services..." />
                            ) : (
                                services.map((service) => (
                                    <option key={service.id} value={service.id}>
                                        {service.name}
                                    </option>
                                ))
                            )}
                        </Field>
                        <ErrorMessage name="service_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">Category</label>
                        <Field as="select" id="category_id" name="category_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="" label="Select Category" />
                            {isCategoriesLoading ? (
                                <option value="" label="Loading categories..." />
                            ) : (
                                categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))
                            )}
                        </Field>
                        <ErrorMessage name="category_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country_id" className="block text-sm font-medium text-gray-700">Country</label>
                        <Field as="select" id="country_id" name="country_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="" label="Select Country" />
                            {isCountriesLoading ? (
                                <option value="" label="Loading countries..." />
                            ) : (
                                countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))
                            )}
                        </Field>
                        <ErrorMessage name="country_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fee" className="block text-sm font-medium text-gray-700">Fee</label>
                        <Field type="string" id="fee" name="fee" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                        <ErrorMessage name="fee" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
                        <Field type="text" id="currency" name="currency" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                        <ErrorMessage name="currency" component="div" className="text-red-600 text-sm" />
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default AddCountryService;
