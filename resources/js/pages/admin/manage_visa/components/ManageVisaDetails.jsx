import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
    useGetVisaDetailsDetailsQuery,
    useUpdateVisaDetailsMutation,

} from '../../../../services/visa_details';
import { useGetCountryListQuery } from '../../../../services/country_api';
import { useGetVisaCategoryListListQuery } from '../../../../services/visa_category_api';

const validationSchema = Yup.object({
    from_country_id: Yup.string().required('From which country is required'),
    to_country_id: Yup.string().required('To which country is required'),
    visa_category_id: Yup.string().required('Visa category is required')
});

const ManageVisaDetails = ({ id }) => {
    const { data: details, isLoading: detailsLoading } = useGetVisaDetailsDetailsQuery(id);
    const { data: countries, isLoading: countriesLoading, error: countriesError } = useGetCountryListQuery();
    const { data: visaCategories, isLoading: visaCategoriesLoading, error: visaCategoriesError } = useGetVisaCategoryListListQuery();
    const [updateVisaDetails] = useUpdateVisaDetailsMutation();

    if (detailsLoading || countriesLoading || visaCategoriesLoading) {
        return <div>Loading...</div>;
    }

    if (countriesError || visaCategoriesError) {
        return <div>Error loading data.</div>;
    }

    const initialValues = {
        from_country_id: details?.from_country_id || '',
        to_country_id: details?.to_country_id || '',
        visa_category_id: details?.visa_category_id || ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await updateVisaDetails({ id, ...values }).unwrap();
            toast.success('Visa details updated successfully');
        } catch (error) {
            toast.error('Failed to update visa details');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Visa Details</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="from_country_id" className="text-gray-700 mb-2">From</label>
                            <Field
                                id="from_country_id"
                                name="from_country_id"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Country</option>
                                {countries?.map(country => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="from_country_id" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="to_country_id" className="text-gray-700 mb-2">To</label>
                            <Field
                                id="to_country_id"
                                name="to_country_id"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Country</option>
                                {countries?.map(country => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="to_country_id" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="visa_category_id" className="text-gray-700 mb-2">Visa Category</label>
                            <Field
                                id="visa_category_id"
                                name="visa_category_id"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Visa Category</option>
                                {visaCategories?.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="visa_category_id" component="div" className="text-red-500 mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Update Visa
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ManageVisaDetails;
