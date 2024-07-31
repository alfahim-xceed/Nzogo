import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const UserList = () => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* {data.map((item, index) => ( */}
                        <tr key={67}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">name</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">name@name.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer"> <FontAwesomeIcon icon={faEdit} /></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-700 cursor-pointer"><FontAwesomeIcon icon={faTrashAlt} /></td>
                        </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </div>
    )

}


export default UserList;
