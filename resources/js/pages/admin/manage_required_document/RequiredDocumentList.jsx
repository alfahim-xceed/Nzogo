import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDeleteRequiredDocumentMutation, useGetRequiredDocumentListQuery } from '../../../services/required_document_api';


const RequiredDocumentList = ({id}) => {

    const {data:details,isLoading,error}=useGetRequiredDocumentListQuery();
    const [deleteRequiredDocument]=useDeleteRequiredDocumentMutation();


    const handleDelete= async (id)=>{
        try {


            await deleteRequiredDocument(id).unwrap();
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
        console.error("doc error ",error);
        return <>Fetching error</>
    }
    // console.log(details);




    return (
        <div className="mt-7">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Document List</h2>
                <Link to="/admin/manage-required-documents/create">
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details && details.length > 0 ? (
                            details.map((doc, index) => (
                                <tr key={doc.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.name}</td>


                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                                        <Link to={`/admin/manage-required-documents/update/${doc.id}`}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(doc.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No documents to show.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RequiredDocumentList;
