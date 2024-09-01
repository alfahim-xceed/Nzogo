import { useGetVisaApplicationListQuery } from "../../services/visa_application_api";

const AppliedVisaList = () => {
    const { data: details, isLoading, error } = useGetVisaApplicationListQuery();

    if (isLoading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Fetching error</>;
    }
    console.log(details);

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Application List</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {details && details.length > 0 ? (
                    details.map((cur) => (
                        <div key={cur.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Application ID: {cur.id}</h3>
                            <p className="text-sm text-gray-700 mb-1"><strong>User:</strong> {cur.user?.name ?? 'N/A'} ({cur.user?.email ?? 'N/A'})</p>
                            <p className="text-sm text-gray-700 mb-1"><strong>Citizen Of:</strong> {cur.citizenOf?.name ?? 'N/A'}</p>
                            <p className="text-sm text-gray-700 mb-1"><strong>Travel Date:</strong> {cur.travel_date ?? 'N/A'}</p>
                            <p className="text-sm text-gray-700 mb-1"><strong>Status:</strong> {cur.status ?? 'N/A'}</p>
                            <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-1"><strong>Visa Details:</strong></p>
                                <p className="text-sm text-gray-500 mb-1"><strong>From Country:</strong> {cur.from_country_name ?? 'N/A'}</p>
                                <p className="text-sm text-gray-500 mb-1"><strong>To Country:</strong> {cur.to_country_name ?? 'N/A'}</p>
                                <p className="text-sm text-gray-500 mb-1"><strong>Visa Category:</strong> {cur.visa_category_name ?? 'N/A'}</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-1"><strong>Visa Type:</strong></p>
                                <p className="text-sm text-gray-500 mb-1"><strong>Fee:</strong> {cur.visaType?.fee ?? 'N/A'}</p>
                                <p className="text-sm text-gray-500 mb-1"><strong>Currency:</strong> {cur.visaType?.currency ?? 'N/A'}</p>
                                <p className="text-sm text-gray-500 mb-1"><strong>Processing Time:</strong> {cur.visaType?.processing_time ?? 'N/A'}</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-sm text-gray-700 mb-1"><strong>Services:</strong></p>
                                <ul className="list-disc ml-4">
                                    {cur.services && cur.services.length > 0 ? (
                                        cur.services.map((service) => (
                                            <li key={service.id} className="text-sm text-gray-500">
                                                {service.name ?? 'N/A'}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-sm text-gray-500">No services available</li>
                                    )}
                                </ul>
                            </div>
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
