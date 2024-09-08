import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDeleteAppointmentMutation, useGetAppointmentListQuery } from '../../services/appointment_api';
import formatDateString from '../../helpers/formatDateString';

const AppointmentList = () => {
    const { data: details, error, isLoading } = useGetAppointmentListQuery();
    const [deleteAppointment] = useDeleteAppointmentMutation();
    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Error loading countries. Please try again later.</p>;
    }

    const handleDelete = async (id) => {

        try {
            await deleteAppointment(id).unwrap();
            toast.success("deleted successfully");
        } catch (err) {
            toast.error(err.message || "Failed to delete");
        }
    };

    // console.log("dd ", details);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Appointment List</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details && details.length > 0 ? (
                            details.map((data, index) => (
                                <tr key={data.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.country.name}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDateString(data.appointment_schedule)}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><Link to={`/appointment/details/${data.id}`}>Details</Link></td>


                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(data.id)}>
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

export default AppointmentList;
