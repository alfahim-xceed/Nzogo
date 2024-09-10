import { useGetCountryServiceListQuery } from "../services/country_service_api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const DiscoverWorld = () => {
    const { data: details, isLoading, error } = useGetCountryServiceListQuery();

    if (isLoading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    if (error) {
        return <p className="text-red-500 text-center">Error loading countries. Please try again later.</p>;
    }

    // Extract unique countries and their details
    const countries = details.reduce((acc, item) => {
        const { country } = item;
        if (!acc[country.id]) {
            acc[country.id] = {
                id: country.id,
                name: country.name,
                flagImgUrl: country.flag_img_url,
                services: []
            };
        }
        acc[country.id].services.push(item.service_name);
        return acc;
    }, {});

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-xl font-extrabold text-center mb-8 text-gray-900">Discover the World</h1>
            <p className="text-center text-xs text-gray-600 mb-12">Find the gateway to 186+ countries with effortless visa solutions.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.values(countries).map((country) => (
                    <Link
                        key={country.id}
                        to={`/explore/country-details/${country.id}`}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex items-center flex-start mb-4">
                            <img
                                src={country.flagImgUrl}
                                alt={`${country.name} flag`}
                                className="w-10 h-10 object-cover rounded-full border border-gray-300 shadow-sm mr-4"
                            />
                            <h2 className="text-sm font-semibold text-gray-800">{country.name}</h2>
                        </div>

                        {/* Add border below the flag and name */}
                        <hr className="w-full border-t border-gray-300 mb-4" />

                        <ul className="list-disc list-inside text-left w-full text-xs">
                            <p className="font-medium mb-2 text-gray-500 flex items-center">
                                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                                Available Services: {country.services.length}
                            </p>
                            {country.services.map((service, idx) => (
                                <li key={idx} className="text-gray-700 mb-1">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DiscoverWorld;
