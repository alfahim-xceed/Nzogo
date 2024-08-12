import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCreateVisaCategoryMutation } from '../../../services/visa_category_api';
import { useCreateRoleMutation } from '../../../services/role_api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
});

const CreateRole = () => {
    const initialValues = {
        name: '',
    };
    const navigate = useNavigate();

    const [createRole] = useCreateRoleMutation();

    const handleSubmit = async (values, { resetForm }) => {

        try {
            let { name } = values;
            const res = await createRole({ name }).unwrap();

            resetForm();
            toast.success("Role added successfully.");
            navigate("/admin/role-list")

        } catch (error) {
            console.error(error);
            toast.error("Role creation error");


        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create New role</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter name"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                        </div>







                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Create role
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateRole;
