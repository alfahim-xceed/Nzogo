import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Example options for select fields
const visaTypeOptions = [
    { value: 'Single entry', label: 'Single entry' },
    { value: 'Multiple entry', label: 'Multiple entry' },
    // Add more types as needed
];

const validationSchema = Yup.object({
    type: Yup.string().required('Visa type is required'),
    fee: Yup.string().required('Visa fee is required'),
    currency: Yup.string().required('Currency is required'),
    processing_time: Yup.string().required('Processing time is required')
});

const UpdateVisaType = () => {
    const navigate = useNavigate();

    const initialValues = {
        type: '',
        free: '',
        currency: '',
        processing_time: ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        // Handle form submission logic here
        // Example: send values to an API and handle the response
        console.log(values);
        setSubmitting(false);
        toast.success('Visa type added successfully');
        navigate('/'); // Redirect after successful submission
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Visa Type</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="type" className="text-gray-700 mb-2">Visa Type</label>
                            <Field
                                id="type"
                                name="type"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Visa Type</option>
                                {visaTypeOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="type" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="free" className="text-gray-700 mb-2">Fee</label>
                            <Field
                                id="fee"
                                name="fee"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter visa fee"
                            />
                            <ErrorMessage name="fee" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="currency" className="text-gray-700 mb-2">Currency</label>
                            <Field
                                id="currency"
                                name="currency"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter currency"
                            />
                            <ErrorMessage name="currency" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="processing_time" className="text-gray-700 mb-2">Processing Time</label>
                            <Field
                                id="processing_time"
                                name="processing_time"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter processing time"
                            />
                            <ErrorMessage name="processing_time" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Update
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default UpdateVisaType;
