import { Link } from "react-router-dom";
import { useGetCountryListQuery } from "../../../services/country_api";
import Banner from "../../../components/Banner";

const ExploreEmbassies = () => {
    const { data: details, isLoading, error } = useGetCountryListQuery();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl text-gray-700">Loading countries...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-lg">Error loading countries. Please try again later.</p>
            </div>
        );
    }

    return (
        <div>

            <Banner
                title="Embassy & Consulate Addresses in Bangladesh"
                desc="Find the addresses and contact details of embassies and consulates in Bangladesh with VISAThing's comprehensive guide. Ensure you have the necessary information to facilitate your visa application and embassy visits."
                button={false}
                img_src="https://visathing.com/images/embassies.svg"
            />

            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-4xl mx-auto  p-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Explore Embassies</h2>
                        <p className="text-gray-600 mb-8 text-xs">
                            Select a country below to get embassy details. Browse through the list to find the embassy information you're looking for.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                        {details && details.length > 0 ? (
                            details.map((country, ind) => (
                                <Link to={`/explore/embassy-details/${country.id}`}>

                                    <div
                                        className="flex items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition duration-200 ease-in-out"
                                        key={ind}
                                    >
                                        <img
                                            src={country?.flag_img_url}
                                            alt="Country flag"
                                            className="w-6 h-6 mr-3"
                                        />
                                        <span className="text-gray-800 font-medium">{country.name}</span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 col-span-full">No countries available to display.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreEmbassies;
