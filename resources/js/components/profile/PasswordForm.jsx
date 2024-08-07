import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateMyPasswordMutation } from '../../services/api';
import { toast } from 'react-toastify';

// Define validation schema using Yup
const validationSchema = Yup.object({
    current_password: Yup.string().required('Current password is required'),
    new_password: Yup.string()
        .required('New password is required')
        .min(8, 'Password must be at least 8 characters')
});

const PasswordForm = () => {
    const [initialValues] = useState({
        current_password: '',
        new_password: '',
    });

    const [updateMyPassword, { error: updateError }] = useUpdateMyPasswordMutation();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await updateMyPassword({
                current_password: values.current_password,
                new_password: values.new_password,
            }).unwrap();
            toast.success("Password updated successfully");
            resetForm();
        } catch (err) {
            toast.error(err.data?.error || "An error occurred");
        }
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col relative">
                            <label htmlFor="current_password" className="text-gray-700 mb-2">Current Password</label>
                            <Field
                                id="current_password"
                                name="current_password"
                                type={showCurrentPassword ? "text" : "password"}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your current password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                                <FontAwesomeIcon icon={showCurrentPassword ? faEyeSlash : faEye} />
                            </button>
                            <ErrorMessage name="current_password" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col relative">
                            <label htmlFor="new_password" className="text-gray-700 mb-2">New Password</label>
                            <Field
                                id="new_password"
                                name="new_password"
                                type={showNewPassword ? "text" : "password"}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your new password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                            </button>
                            <ErrorMessage name="new_password" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <FontAwesomeIcon icon={faSave} className="mr-2" />
                            Save Changes
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default PasswordForm;
