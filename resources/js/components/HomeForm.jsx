import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useGetCountryListQuery } from '../services/country_api';
import { useGetCategoryCountryListQuery } from '../services/category_country_api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    travelling_to_id: Yup.string().required('Travelling to is required'),
    visa_category_id: Yup.string().required('Visa category is required')
});

const HomeForm = () => {
    const navigate = useNavigate();

    const { data: countryDetails, isLoading: countryLoading, error: countryError } = useGetCountryListQuery();
    const [selectedCountry, setSelectedCountry] = useState('');
    const { data: categoryCountryDetails, refetch: refetchCategories } = useGetCategoryCountryListQuery(
        { travelling_to_id: selectedCountry },
        { skip: !selectedCountry } // Skip query if no country is selected
    );

    useEffect(() => {
        if (selectedCountry) {
            refetchCategories();
        }
    }, [selectedCountry, refetchCategories]);

    const initialValues = {
        travelling_to_id: '',
        visa_category_id: ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        navigate(`/visa/details/${values.travelling_to_id}/${values.visa_category_id}`);
    };

    // Handle loading and error states
    if (countryLoading) return <div>Loading...</div>;
    if (countryError) return <div>Error loading data</div>;

    const countryOptions = countryDetails?.map(country => ({
        value: country.id,
        label: country.name
    }));

    const visaCategoryOptions = categoryCountryDetails?.map(category => ({
        value: category.category_id,
        label: category.category_name
    })) || [];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Check Visa Details</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Country Selection */}
                            <div className="flex flex-col">
                                <label htmlFor="travelling_to_id" className="text-gray-700 font-medium mb-2">
                                    Travelling To
                                </label>
                                <Field
                                    id="travelling_to_id"
                                    name="travelling_to_id"
                                    as="select"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={e => {
                                        const value = e.target.value;
                                        setFieldValue('travelling_to_id', value);
                                        setSelectedCountry(value);
                                        setFieldValue('visa_category_id', ''); // Reset category when country changes
                                    }}
                                >
                                    <option value="">Select Country</option>
                                    {countryOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Field>
                                <div className="text-sm text-red-500 mt-1">
                                    <ErrorMessage name="travelling_to_id" />
                                </div>
                            </div>

                            {/* Visa Category Selection */}
                            <div className="flex flex-col">
                                <label htmlFor="visa_category_id" className="text-gray-700 font-medium mb-2">
                                    Visa Category
                                </label>
                                <Field
                                    id="visa_category_id"
                                    name="visa_category_id"
                                    as="select"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={!selectedCountry}
                                    style={{
                                        maxHeight: '200px', // Limit dropdown height
                                        overflowY: 'auto' // Scrollable dropdown
                                    }}
                                >
                                    <option value="">Select Visa Category</option>
                                    {visaCategoryOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Field>
                                <div className="text-sm text-red-500 mt-1">
                                    <ErrorMessage name="visa_category_id" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="sm:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Check Details'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default HomeForm;
