import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDeleteUserMutation, useGetUserListQuery } from '../../../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmDialog from '../../../helpers/ConfirmDialogue';


const UserList = () => {

    const { data: details, error, isLoading } = useGetUserListQuery();
    const [deleteUser] = useDeleteUserMutation();

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <>Error..</>;
    }

    const handleDelete = async (userId) => {
        toast(
            (t) => (
                <ConfirmDialog
                    onConfirm={async () => {
                        toast.dismiss(t.id);
                        try {
                            await deleteUser(userId).then((res) => {
                                if (res.error != null) {
                                    toast.error(res.error.data.msg);
                                } else {

                                    toast.success("User deleted successfully");
                                }
                            });
                        } catch (error) {
                            toast.error(error.message || "Failed to delete user");
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

    // console.log("data => ",details);

    return (
        <div className="overflow-x-auto">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">User List</h2>

            </div>
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
                    {details && details.map((user, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                                <Link to={`/admin/manage-user/${user.id}`}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(user.id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}


export default UserList;
