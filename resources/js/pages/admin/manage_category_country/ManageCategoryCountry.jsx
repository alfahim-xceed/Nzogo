import React, { useEffect, useState } from 'react';
import { useGetCountryListQuery } from "../../../services/country_api";
import { useGetVisaCategoryListListQuery } from "../../../services/visa_category_api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateCategoryCountryMutation, useDeleteCategoryCountryMutation, useGetCategoryCountryListQuery } from '../../../services/category_country_api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ManageCategoryCountry = () => {
    const { data: countries = [] } = useGetCountryListQuery();
    const { data: categories = [] } = useGetVisaCategoryListListQuery();

    const { id } = useParams();

    const [createCategoryCountry] = useCreateCategoryCountryMutation();
    const [deleteCategoryCountry] = useDeleteCategoryCountryMutation();
    const { data: details, isLoading, error } = useGetCategoryCountryListQuery({ travelling_to_id: id });

    // Store selected category IDs in an array
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Prepopulate selectedCategories based on details
    useEffect(() => {
        if (details) {
            const preSelected = details.map(detail => detail.category_id);
            setSelectedCategories(preSelected);
        }
    }, [details]);

    const handleCheckboxChange = async (catId, isChecked) => {
        const values = {
            category_id: catId,
            country_id: id,
        };

        if (isChecked) {
            // Call API to add the category
            try {
                await createCategoryCountry(values).unwrap();
                toast.success("Category added successfully.");
            } catch (err) {
                console.error(err);
                toast.error("Failed to add category.");
            }
        } else {
            // Call API to remove the category
            // console.log("details ",details);
            // console.log("cid ",catId);
            const catIdToDelete=details.find(details=>details.category_id==catId)
            try {
                await deleteCategoryCountry(catIdToDelete.id).unwrap();
                toast.success("Category removed successfully.");
            } catch (err) {
                console.error(err);
                toast.error("Failed to remove category.");
            }
        }
    };


    const initialValues = {
        country_id: id,
    };

    const validationSchema = Yup.object({
        country_id: Yup.string().required('Required'),
    });

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Category Country</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => { }}  // No need to submit since we're handling changes on checkbox clicks
            >
                <Form className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="country_id" className="block text-sm font-medium text-gray-700">Country</label>
                        <Field as="select" id="country_id" name="country_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" disabled>
                            <option value="" label="Select Country" />
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="country_id" component="div" className="text-red-600 text-sm" />
                    </div>

                    <div className="form-group">
                        <label className="block text-sm font-medium text-gray-700">Categories</label>
                        <div className="mt-2 space-y-2">
                            {categories.map((cat) => (
                                <div key={cat.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`cat-${cat.id}`}
                                        name="category_id"
                                        value={cat.id}
                                        checked={selectedCategories.includes(cat.id)}  // Pre-check based on selectedCategories
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            setSelectedCategories((prev) =>
                                                isChecked
                                                    ? [...prev, cat.id]
                                                    : prev.filter((id) => id !== cat.id)
                                            );
                                            handleCheckboxChange(cat.id, isChecked);
                                        }}
                                        className="mr-2 h-4 w-4 border-gray-300 rounded"
                                    />
                                    <label htmlFor={`cat-${cat.id}`} className="text-sm text-gray-700">
                                        {cat.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                </Form>
            </Formik>
        </div>
    );
};

export default ManageCategoryCountry;
