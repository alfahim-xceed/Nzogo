import React from 'react';
import { useGetCountryListQuery } from "../../../services/country_api";
import { useGetVisaCategoryListListQuery } from "../../../services/visa_category_api";
import { useGetServiceListQuery } from "../../../services/service_api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateCountryServiceMutation, useGetCountryServiceDetailsQuery } from '../../../services/country_service_api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const UpdateCountryService = () => {
    const { data: countries = [] } = useGetCountryListQuery();
    const { data: categories = [] } = useGetVisaCategoryListListQuery();
    const { data: services = [] } = useGetServiceListQuery();

    const { id } = useParams();

    const { data: details, isLoading, error } = useGetCountryServiceDetailsQuery(id);

    const [updateCountryService] = useUpdateCountryServiceMutation();

    const initialValues = {
        service_id: details?.service_id || '',
        category_id: details?.category_id || '',
        country_id: details?.country_id || '',
    };

    const validationSchema = Yup.object({
        service_id: Yup.string().required('Required'),
        category_id: Yup.string().required('Required'),
        country_id: Yup.string().required('Required'),
    });

    const handleSubmit = async (values) => {
        console.log('Form Data:', values);
        // Handle form submission
        try {
            await updateCountryService({id,...values}).unwrap();
            toast.success("Updated successfully.");
        } catch (err) {
            console.error(err);
            toast.error("Failed to add.");
        }
    };

    if (isLoading) {
        return <>Loading..</>
    }

    if (error) {
        console.error("doc error ", error);
        return <>Fetching error</>
    }

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Update country service</h1>
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
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="service_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">Category</label>
                        <Field as="select" id="category_id" name="category_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="" label="Select Category" />
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="category_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country_id" className="block text-sm font-medium text-gray-700">Country</label>
                        <Field as="select" id="country_id" name="country_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="" label="Select Country" />
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="country_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default UpdateCountryService;
