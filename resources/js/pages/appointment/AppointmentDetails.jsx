import { useParams } from "react-router-dom";
import { useGetAppointmentDetailsQuery } from "../../services/appointment_api";

const AppointmentDetails = () => {
    const { id } = useParams();
    const { data: details, isLoading, error } = useGetAppointmentDetailsQuery(id);

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Error loading appointment details. Please try again later.</p>;
    }

    const {
        appointment_type,
        appointment_schedule,
        meeting_type,
        expected_travel_date,
        country,
        visa_category,
        service,
        user
    } = details;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Appointment Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* General Appointment Info */}
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">General Information</h2>
                    <p className="text-gray-600"><span className="font-semibold">Type:</span> {appointment_type}</p>
                    <p className="text-gray-600"><span className="font-semibold">Schedule:</span> {new Date(appointment_schedule).toLocaleString()}</p>
                    <p className="text-gray-600"><span className="font-semibold">Meeting Type:</span> {meeting_type}</p>
                    <p className="text-gray-600"><span className="font-semibold">Expected Travel Date:</span> {expected_travel_date}</p>
                </div>

                {/* Travel Details */}
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Travel Information</h2>
                    <div className="flex items-center mb-4">
                        <img src={country.flag_img_url} alt={`${country.name} flag`} className="w-10 h-10 mr-4" />
                        <p className="text-gray-600"><span className="font-semibold">Destination:</span> {country.name}</p>
                    </div>
                    <p className="text-gray-600"><span className="font-semibold">Visa Category:</span> {visa_category.name}</p>
                    <p className="text-gray-600"><span className="font-semibold">Service:</span> {service.name}</p>
                </div>
            </div>

            {/* User Info */}
            <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">User Information</h2>
                <p className="text-gray-600"><span className="font-semibold">Name:</span> {user.name}</p>
                <p className="text-gray-600"><span className="font-semibold">Email:</span> {user.email}</p>
                <p className="text-gray-600"><span className="font-semibold">Phone:</span> {user.phone}</p>
            </div>
        </div>
    );
};

export default AppointmentDetails;
