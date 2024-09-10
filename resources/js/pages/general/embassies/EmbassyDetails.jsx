import { useParams } from "react-router-dom";
import { useGetEmbassyListByCountryIdQuery } from "../../../services/embassy_api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../../components/Banner";

const EmbassyDetails = () => {
    const { id } = useParams();
    const { data: details, isLoading, error } = useGetEmbassyListByCountryIdQuery(id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-md text-gray-700">Loading embassies...</div>
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
        <div>

            <div className="min-h-screen py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-md font-bold text-gray-900 mb-12 text-center">
                    Embassy Details
                </h1>

                {details && details.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {details.map((embassy, ind) => (
                            <div
                                key={ind}
                                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                                style={{ minHeight: '280px' }}  // Increased minimum height for bigger cards
                            >
                                <div className="p-6">  {/* Increased padding for a more spacious feel */}
                                    <h2 className="text-md font-bold text-gray-800 mb-4">  {/* Increased font size */}
                                        {embassy.name}
                                    </h2>

                                    <div className="text-xs space-y-4">  {/* Increased spacing between elements */}
                                        <div className="flex items-start text-gray-700">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 mr-3 mt-1" />
                                            <span>
                                                <strong>Address:</strong> {embassy.address}
                                            </span>
                                        </div>
                                        <div className="flex items-start text-gray-700">
                                            <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-3 mt-1" />
                                            <span>
                                                <strong>Phone:</strong> {embassy.phone_number}
                                            </span>
                                        </div>
                                        <div className="flex items-start text-gray-700">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 mr-3 mt-1" />
                                            <span>
                                                <strong>Email: </strong>
                                                <a
                                                    href={`mailto:${embassy.email}`}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    {embassy.email}
                                                </a>
                                            </span>
                                        </div>
                                        <div className="flex items-start text-gray-700">
                                            <FontAwesomeIcon icon={faGlobe} className="text-blue-600 mr-3 mt-1" />
                                            <span>
                                                <strong>Website:</strong>{" "}
                                                <a
                                                    href={embassy.website_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    {embassy.website_url}
                                                </a>
                                            </span>
                                        </div>
                                        <div className="flex items-start text-gray-700">
                                            <FontAwesomeIcon icon={faClock} className="text-blue-600 mr-3 mt-1" />
                                            <span>
                                                <strong>Work Schedule:</strong> {embassy.work_schedule}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 text-xs">
                        <p>No embassy details found.</p>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default EmbassyDetails;
