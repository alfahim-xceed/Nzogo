import React, { useState, useEffect } from 'react';
import { useGetRequiredDocumentListQuery } from "../../../services/required_document_api";
import { useGetCountryListQuery } from "../../../services/country_api";
import { useGetVisaCategoryListListQuery } from "../../../services/visa_category_api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateCategoryCountryRequiredDocumentMutation, useDeleteCategoryCountryRequiredDocumentMutation, useGetCategoryCountryRequiredDocumentListByCountryCategoryIdQuery } from '../../../services/category_country_required_document_api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ManageCategoryCountryRequiredDocument = () => {
    const { data: documents = [] } = useGetRequiredDocumentListQuery();
    const { data: countries = [] } = useGetCountryListQuery();
    const { data: categories = [] } = useGetVisaCategoryListListQuery();

    const { country_id, category_id } = useParams();

    const [createCategoryCountryRequiredDocument] = useCreateCategoryCountryRequiredDocumentMutation();
    const [deleteCategoryCountryRequiredDocument] = useDeleteCategoryCountryRequiredDocumentMutation();

    const { data: details, isLoading, error } = useGetCategoryCountryRequiredDocumentListByCountryCategoryIdQuery({ country_id, category_id });

    // Store selected document IDs in an array
    const [selectedDocuments, setSelectedDocuments] = useState([]);

    // Prepopulate selectedDocuments based on details
    useEffect(() => {
        if (details) {
            const preSelected = details.map(detail => detail.requirement_document_id);
            setSelectedDocuments(preSelected);
        }
    }, [details]);

    const handleCheckboxChange = async (docId, isChecked) => {
        const values = {
            requirement_document_id: docId,
            category_id,
            country_id
        };

        if (isChecked) {
            // Call API to add the document
            try {
                await createCategoryCountryRequiredDocument(values).unwrap();
                toast.success("Document added successfully.");
            } catch (err) {
                console.error(err);
                toast.error("Failed to add document.");
            }
        } else {
            // Call API to remove the document

            // Find the corresponding detail entry
            const detailToDelete = details.find(detail => detail.requirement_document_id === docId);

            if (detailToDelete) {
                try {
                    // Call API to delete the document using the unique ID from `details`
                    await deleteCategoryCountryRequiredDocument(detailToDelete.id).unwrap();
                    toast.success("Document removed successfully.");
                } catch (err) {
                    console.error(err);
                    toast.error("Failed to remove document.");
                }
            }


        }
    };

    const initialValues = {
        category_id: category_id,
        country_id: country_id,
    };

    const validationSchema = Yup.object({
        category_id: Yup.string().required('Required'),
        country_id: Yup.string().required('Required'),
    });

    // console.log("detailsw ", details);

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Category Country Required Document</h1>
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
                        <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">Category</label>
                        <Field as="select" id="category_id" name="category_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" disabled>
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
                        <label className="block text-sm font-medium text-gray-700">Required Documents</label>
                        <div className="mt-2 space-y-2">
                            {documents.map((doc) => (
                                <div key={doc.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`doc-${doc.id}`}
                                        name="requirement_document_id"
                                        value={doc.id}
                                        checked={selectedDocuments.includes(doc.id)}  // Pre-check based on selectedDocuments
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            setSelectedDocuments((prev) =>
                                                isChecked
                                                    ? [...prev, doc.id]
                                                    : prev.filter((id) => id !== doc.id)
                                            );
                                            handleCheckboxChange(doc.id, isChecked);
                                        }}
                                        className="mr-2 h-4 w-4 border-gray-300 rounded"
                                    />
                                    <label htmlFor={`doc-${doc.id}`} className="text-sm text-gray-700">
                                        {doc.name}
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

export default ManageCategoryCountryRequiredDocument;
