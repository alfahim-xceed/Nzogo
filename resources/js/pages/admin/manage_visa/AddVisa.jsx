import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCreateRoleMutation } from '../../../services/role_api';

// Example options for select fields
const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    // Add more countries as needed
];

const visaCategoryOptions = [
    { value: 'tourist', label: 'Tourist' },
    { value: 'business', label: 'Business' },
    // Add more categories as needed
];

// Define validation schema using Yup
const validationSchema = Yup.object({
    from: Yup.string().required('From which country is required'),
    to: Yup.string().required('To which country is required'),
    visa_category: Yup.string().required('Visa category is required')
});

const AddVisa = () => {
    const navigate = useNavigate();
    const [createRole] = useCreateRoleMutation();

    const initialValues = {
        from: '',
        to: '',
        visa_category: ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await createRole(values).unwrap();
            toast.success("Visa created successfully");
            navigate('/visa-list'); // Redirect to a different page after successful creation
        } catch (error) {
            toast.error("Failed to create visa");
        }
        setSubmitting(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create New Visa</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="from" className="text-gray-700 mb-2">From</label>
                            <Field
                                id="from"
                                name="from"
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
                            <ErrorMessage name="from" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="to" className="text-gray-700 mb-2">To</label>
                            <Field
                                id="to"
                                name="to"
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
                            <ErrorMessage name="to" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="visa_category" className="text-gray-700 mb-2">Visa Category</label>
                            <Field
                                id="visa_category"
                                name="visa_category"
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
                            <ErrorMessage name="visa_category" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Create Visa
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddVisa;
