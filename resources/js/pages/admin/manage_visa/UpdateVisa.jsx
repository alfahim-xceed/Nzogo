import React from 'react';
import { useGetCountryListQuery } from "../../../services/country_api";
import { useGetVisaCategoryListListQuery } from "../../../services/visa_category_api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useGetVisaTypeListQuery } from '../../../services/visa_type_api';
import { useGetVisaDetailsQuery, useUpdateVisaMutation } from '../../../services/visa_api';
import { useParams } from 'react-router-dom';

const UpdateVisa = () => {
    const { data: countries = [], isLoading: isCountriesLoading } = useGetCountryListQuery();
    const { data: categories = [], isLoading: isCategoriesLoading } = useGetVisaCategoryListListQuery();
    const { data: types = [], isLoading: isTypesLoading } = useGetVisaTypeListQuery();

    const { id } = useParams();

    const { data: details, isLoading, error } = useGetVisaDetailsQuery(id);

    const [updateVisa] = useUpdateVisaMutation();

    const initialValues = {
        type_id: details?.type_id || '',
        category_id: details?.category_id || '',
        country_id: details?.country_id || '',
        fee: details?.fee || '',
        currency: details?.currency || '',
        processing_time: details?.processing_time || "",
    };

    const validationSchema = Yup.object({
        type_id: Yup.string().required('Visa type is required'),
        category_id: Yup.string().required('Category is required'),
        country_id: Yup.string().required('Country is required'),
        fee: Yup.string().required('Fee is required'),
        currency: Yup.string().required('Currency is required'),
        processing_time: Yup.string().required('Processing time is required'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await updateVisa({ id, ...values }).unwrap();
            toast.success("Visa added successfully.");
            resetForm();
        } catch (err) {
            console.error(err);
            toast.error("Failed to add visa.");
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
            <h1 className="text-2xl font-bold mb-4">Add Visa</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="type_id" className="block text-sm font-medium text-gray-700">Visa Type</label>
                        <Field as="select" id="type_id" name="type_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="" label="Select Visa Type" />
                            {isTypesLoading ? (
                                <option value="" label="Loading visa types..." />
                            ) : (
                                types.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>
                                ))
                            )}
                        </Field>
                        <ErrorMessage name="type_id" component="div" className="text-red-600 text-sm" />
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
                        <Field type="text" id="fee" name="fee" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                        <ErrorMessage name="fee" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
                        <Field type="text" id="currency" name="currency" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                        <ErrorMessage name="currency" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="processing_time" className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <Field type="text" id="processing_time" name="processing_time" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                        <ErrorMessage name="processing_time" component="div" className="text-red-600 text-sm" />
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default UpdateVisa;