import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetVisaDetailsVisaTypeDetailsQuery, useUpdateVisaDetailsVisaTypeMutation } from '../../../../../services/visa_details_visa_type_api';
import { useGetVisaTypeListQuery } from '../../../../../services/visa_type_api';

// Define validation schema using Yup
const validationSchema = Yup.object({
    visa_type_id: Yup.string().required('Visa type is required'),
    fee: Yup.string().required('Visa fee is required'),
    currency: Yup.string().required('Currency is required'),
    processing_time: Yup.string().required('Processing time is required')
});

const UpdateVisaType = () => {
    const navigate = useNavigate();
    const { visa_type_id } = useParams();

    // Fetching visa details and visa type options
    const { data: visaDetails,isLoading,error } = useGetVisaDetailsVisaTypeDetailsQuery(visa_type_id);
    const { data: visaTypeOptions } = useGetVisaTypeListQuery();
    const [updateVisaDetailsVisaType] = useUpdateVisaDetailsVisaTypeMutation();

    // Initialize form values based on fetched data
    const initialValues = {
        visa_type_id: visaDetails?.visa_type_id || '',
        fee: visaDetails?.fee || '',
        currency: visaDetails?.currency || '',
        processing_time: visaDetails?.processing_time || ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {

            await updateVisaDetailsVisaType({ id:visa_type_id, ...values }).unwrap();
            toast.success('Visa type updated successfully');

        } catch (error) {
            toast.error('Failed to update visa type');
        }
        setSubmitting(false);
    };

    if(isLoading){
        return <>Loading..</>
    }

    if(error){
        return <>Fetching error</>
    }
    console.log(visaDetails);

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
                            <label htmlFor="visa_type_id" className="text-gray-700 mb-2">Visa Type</label>
                            <Field
                                id="visa_type_id"
                                name="visa_type_id"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Visa Type</option>
                                {visaTypeOptions?.map(option => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="visa_type_id" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="fee" className="text-gray-700 mb-2">Fee</label>
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
