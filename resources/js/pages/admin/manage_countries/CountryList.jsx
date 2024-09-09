import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmDialog from '../../../helpers/ConfirmDialogue';
import { useDeleteCountryMutation, useGetCountryListQuery } from '../../../services/country_api';

const CountryList = () => {
    const { data: details, error, isLoading } = useGetCountryListQuery();
    const [deleteCountry] = useDeleteCountryMutation();

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Error loading countries. Please try again later.</p>;
    }

    const handleDelete = async (country_id) => {
        toast(
            (t) => (
                <ConfirmDialog
                    onConfirm={async () => {
                        toast.dismiss(t.id);
                        try {
                            const res = await deleteCountry(country_id).unwrap();
                            toast.success("Country deleted successfully");
                        } catch (err) {
                            toast.error(err.message || "Failed to delete country");
                        }
                    }}
                    onCancel={() => toast.dismiss(t.id)}
                />
            ),
            {
                duration: Infinity,
            }
        );
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Country List</h2>
                <Link to="/admin/add-country">
                    <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add New
                    </button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details && details.length > 0 ? (
                            details.map((country, index) => (
                                <tr key={country.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[50%]">
                                        <img
                                            src={country.flag_img_url}
                                            alt={`${country.name} flag`}
                                            className="w-16 h-16 object-cover"  // Adjust size as needed
                                        />
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{country.name}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                                        <Link to={`/admin/country/update/${country.id}`}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(country.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No countries to show.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CountryList;
