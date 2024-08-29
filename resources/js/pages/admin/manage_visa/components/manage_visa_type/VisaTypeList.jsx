import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDeleteVisaDetailsVisaTypeMutation, useGetVisaDetailsVisaTypeListQuery } from '../../../../../services/visa_details_visa_type_api';
import { toast } from 'react-toastify';

const VisaTypeList = ({id}) => {

    const {data:details,isLoading,error}=useGetVisaDetailsVisaTypeListQuery(id);
    const [deleteVisaDetailsVisaType]=useDeleteVisaDetailsVisaTypeMutation();

    const handleDelete= async (id)=>{
        try {

            await deleteVisaDetailsVisaType(id).unwrap();

            toast.success("Item deleted successfully.");



        } catch (err) {
            console.error(err);
            toast.error("Failed to delete item.");
        }
    }


    if(isLoading){
        return <>Loading..</>
    }

    if(error){
        return <>Fetching error</>
    }
    // console.log(details);

    return (
        <div className="mt-7">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Visa Type List</h2>
                <Link to={`/admin/manage-visa/add-visa-type/${id}`}>
                    <button className="px-2 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
                        <FontAwesomeIcon icon={faPlus} className="mr-1" />
                        Add New
                    </button>

                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processing time</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details && details.length > 0 ? (
                            details.map((visa, index) => (
                                <tr key={visa.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visa.visa_type_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visa.fee}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visa.currency}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visa.processing_time}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                                        <Link to={`/admin/manage-visa/update/visa-type/${visa.id}`}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(visa.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No visa types to show.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VisaTypeList;
