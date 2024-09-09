import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCountryListQuery } from "../../../services/country_api";
import { useCreateProcessStepMutation } from '../../../services/process_step_api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    country_id: Yup.string().required('Country is required'),
});

const CreateProcessStep = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: countryList, isLoading, error } = useGetCountryListQuery();
    const [createProcessStep] = useCreateProcessStepMutation();

    const initialValues = {
        title: "",
        description: "",
        country_id: id
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await createProcessStep(values).unwrap();
            toast.success('Process step created successfully');
            // navigate('/admin/process-step-list');
        } catch (error) {
            console.error("err ", error);
            toast.error('Failed to create process step');
        } finally {
            setSubmitting(false);
        }
    };

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        console.error("Error fetching countries:", error);
        return <>Error fetching countries</>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create New Process Step</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">

                        <div className="flex flex-col">
                            <label htmlFor="country_id" className="text-gray-700 mb-2">Country</label>
                            <Field
                                id="country_id"
                                name="country_id"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Country</option>
                                {countryList?.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="country_id" component="div" className="text-red-500 mt-1" />
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="title" className="text-gray-700 mb-2">Title</label>
                            <Field
                                id="title"
                                name="title"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter title"
                            />
                            <ErrorMessage name="title" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-gray-700 mb-2">Description</label>
                            <Field
                                id="description"
                                name="description"
                                as="textarea"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter description"
                                rows="4"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 mt-1" />
                        </div>



                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Create Process Step
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateProcessStep;
