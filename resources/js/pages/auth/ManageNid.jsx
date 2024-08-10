import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useGetNidDetailsQuery, useManageNidMutation } from '../../services/api';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // Ensure you have this import

// Define validation schema using Yup
const validationSchema = Yup.object({
    nid_number: Yup.string().required('NID Number is required'),
    address: Yup.string().required('Address is required'),
});

const ManageNid = ({ user_id }) => {
    const [initialValues, setInitialValues] = useState({
        nid_number: '',
        address: '',
    });


    if (user_id == null) {
        user_id = useSelector((state) => state.auth.id);
    }

    const { data: details, error, loading } = useGetNidDetailsQuery(user_id, { skip: !user_id });



    const [manageNid] = useManageNidMutation();

    useEffect(() => {
        if (details) {
            setInitialValues({
                nid_number: details.nid_number || "",
                address: details.address || ""
            });
        }
    }, [details]);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            let { nid_number, address } = values;
            const res = await manageNid({ user_id, nid_number, address }).unwrap();
            console.log("res => ", res);
            toast.success("NID updated");
        } catch (err) {
            toast.error(err.message || "An error occurred");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage NID</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error loading NID details</p>}
            {!loading && !error && (
                <Formik
                    enableReinitialize={true} // Enable reinitialization with new initialValues
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="nid_number" className="text-gray-700 mb-2">NID Number</label>
                                <Field
                                    id="nid_number"
                                    name="nid_number"
                                    type="text"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter NID number"
                                />
                                <ErrorMessage name="nid_number" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="address" className="text-gray-700 mb-2">Address</label>
                                <Field
                                    as="textarea"
                                    id="address"
                                    name="address"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    placeholder="Enter address"
                                    rows="4"
                                />
                                <ErrorMessage name="address" component="div" className="text-red-500 mt-1" />
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
            )}
        </div>
    );
};

export default ManageNid;
