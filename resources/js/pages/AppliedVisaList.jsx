import { toast } from "react-toastify";
import { useDeleteVisaApplicationMutation, useGetVisaApplicationListQuery } from "../services/visa_application_api";

const AppliedVisaList = () => {
    const { data: details, isLoading, error } = useGetVisaApplicationListQuery();
    const [deleteVisaApplication] = useDeleteVisaApplicationMutation();

    const handleDelete = async (id) => {
        try {
            await deleteVisaApplication(id).unwrap();
            toast.success("Deleted successfully.");
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete.");
        }
    };

    if (isLoading) {
        return <>Loading...</>;
    }

    if (error) {
        return <>Fetching error</>;
    }

    console.log("data is ", details);

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-8">Application List</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {details && details.length > 0 ? (
                    details.map((cur) => (
                        <div key={cur.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 relative">
                            <h3 className="text-md font-semibold mb-2">Application ID: {cur.id}</h3>
                            <p className="text-xs text-gray-700 mb-1"><strong>User:</strong> {cur.user?.name ?? 'N/A'} ({cur.user?.email ?? 'N/A'})</p>
                            <p className="text-xs text-gray-700 mb-1"><strong>Citizen Of:</strong> {cur.country?.name ?? 'N/A'}</p>
                            <p className="text-xs text-gray-700 mb-1"><strong>Travel Date:</strong> {cur.travel_date ?? 'N/A'}</p>
                            <p className="text-xs text-gray-700 mb-1"><strong>Status:</strong> {cur.status ?? 'N/A'}</p>
                            <div className="mt-2">
                                <p className="text-xs text-gray-700 mb-1"><strong>Visa Details:</strong></p>
                                <p className="text-xs text-gray-500 mb-1"><strong>Visa for :</strong> {cur?.visa_for ?? 'N/A'}</p>

                                <p className="text-xs text-gray-500 mb-1"><strong>Type:</strong> {cur.visa_type?.name ?? 'N/A'}</p>

                                <p className="text-xs text-gray-500 mb-1"><strong>Fee:</strong> {cur.visa?.fee ?? 'N/A'}</p>
                                <p className="text-xs text-gray-500 mb-1"><strong>Currency:</strong> {cur.visa?.currency ?? 'N/A'}</p>
                                <p className="text-xs text-gray-500 mb-1"><strong>Processing Time:</strong> {cur.visa?.processing_time ?? 'N/A'}</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-gray-700 mb-1"><strong>Services:</strong></p>
                                <ul className="list-disc ml-4">
                                    {cur.services && Object.keys(cur.services).length > 0 ? (
                                        Object.values(cur.services).map((service) => (
                                            <li key={service.id} className="text-xs text-gray-500">
                                                <p><strong>Service ID:</strong> {service.id} - {service.service?.name}</p>
                                                <p><strong>Fee:</strong> {service.fee}</p>
                                                <p><strong>Currency:</strong> {service.currency}</p>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-xs text-gray-500">No services available</li>
                                    )}
                                </ul>
                            </div>
                            <button
                                onClick={() => handleDelete(cur.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 text-xs"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No applications to show.</p>
                )}
            </div>
        </div>
    );
};

export default AppliedVisaList;
