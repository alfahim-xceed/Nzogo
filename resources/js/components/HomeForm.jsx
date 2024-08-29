import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useGetCountryListQuery } from "../services/country_api";
import { useGetVisaCategoryListListQuery, visa_category_api } from "../services/visa_category_api";

// Define validation schema using Yup
const validationSchema = Yup.object({
    travelling_to_id: Yup.string().required('Travelling to is required'),
    visa_category_id: Yup.string().required('Visa category is required')
});

const HomeForm = () => {
    const navigate = useNavigate();

    const { data: countryDetails, isLoading: countryLoading, error: countryError } = useGetCountryListQuery();
    const { data: visaCategoryDetails, isLoading: visaCategoryLoading, error: visaCategoryError } = useGetVisaCategoryListListQuery();

    const initialValues = {
        travelling_to_id: "",
        visa_category_id: ""
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        // toast.success('Form submitted successfully');
        // navigate('/success'); // Redirect after successful submission
        navigate(`/visa/details/${values.travelling_to_id}/${values.visa_category_id}`);
    };

    // Handle loading and error states
    if (countryLoading || visaCategoryLoading) return <div>Loading...</div>;
    if (countryError || visaCategoryError) return <div>Error loading data</div>;

    const countryOptions = countryDetails?.map(country => ({
        value: country.id,
        label: country.name
    }));

    const visaCategoryOptions = visaCategoryDetails?.map(category => ({
        value: category.id,
        label: category.name
    }));

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
                            <label htmlFor="travelling_to_id" className="text-gray-700 mb-2">Travelling To</label>
                            <Field
                                id="travelling_to_id"
                                name="travelling_to_id"
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
                            <div className="h-6">
                                <ErrorMessage name="travelling_to_id" component="div" className="text-red-500" />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/3">
                            <label htmlFor="visa_category_id" className="text-gray-700 mb-2">Visa Category</label>
                            <Field
                                id="visa_category_id"
                                name="visa_category_id"
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
                            <div className="h-6">
                                <ErrorMessage name="visa_category_id" component="div" className="text-red-500" />
                            </div>
                        </div>

                        <div className="flex items-end mb-6">
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
