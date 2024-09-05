import { useParams } from "react-router-dom";
import { useGetEmbassyListByCountryIdQuery } from "../../../services/embassy_api";

const EmbassyDetails = () => {
    const { id } = useParams();
    const { data: details, isLoading, error } = useGetEmbassyListByCountryIdQuery(id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl text-gray-700">Loading embassies...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-lg">Error loading embassies. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                    Embassy Details
                </h1>

                {details && details.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {details.map((embassy, ind) => (
                            <div key={ind} className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {embassy.name}
                                </h2>

                                <div className="text-gray-600 mb-2">
                                    <strong>Address:</strong> {embassy.address}
                                </div>
                                <div className="text-gray-600 mb-2">
                                    <strong>Phone:</strong> {embassy.phone_number}
                                </div>
                                <div className="text-gray-600 mb-2">
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href={`mailto:${embassy.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {embassy.email}
                                    </a>
                                </div>
                                <div className="text-gray-600 mb-2">
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href={embassy.website_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {embassy.website_url}
                                    </a>
                                </div>
                                <div className="text-gray-600 mb-2">
                                    <strong>Work Schedule:</strong> {embassy.work_schedule}
                                </div>

                                <div className="text-gray-600 mt-4">
                                    <strong>Country:</strong> {embassy.country.name}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600">
                        <p>No embassy details found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmbassyDetails;
