import { useParams } from "react-router-dom";
import { useGetCountryServiceListByCountryIdQuery } from "../../../services/country_service_api";
import { useGetCategoryCountryListQuery } from "../../../services/category_country_api";
import { useGetProcessStepListByCountryIdQuery } from "../../../services/process_step_api";
import Banner from "../../../components/Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTag, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = () => {
    const { id } = useParams();

    // Fetch country services
    const { data: countryServices, isLoading: isCountryLoading, error: countryError } = useGetCountryServiceListByCountryIdQuery(id);

    // Fetch visa categories by country
    const { data: categories, isLoading: isCategoryLoading, error: categoryError } = useGetCategoryCountryListQuery({ travelling_to_id: id });

    // Fetch process steps by country
    const { data: processSteps, isLoading: isProcessStepLoading, error: processStepError } = useGetProcessStepListByCountryIdQuery(id);

    // Handle loading states
    if (isCountryLoading || isCategoryLoading || isProcessStepLoading) {
        return <div className="text-center py-10 text-base text-gray-600">Loading...</div>;
    }

    // Handle errors
    if (countryError || categoryError || processStepError) {
        return <div className="text-red-500 text-center py-10 text-base">Error loading data. Please try again later.</div>;
    }

    const countryName = countryServices.length > 0 && (countryServices[0].country.name) || "";

    return (
        <div className="min-h-screen">
            <Banner
                title={`${countryName} Visa from Bangladesh`}
                desc={`Are you thinking of going to ${countryName}? You must need a ${countryName} visa from Bangladesh to enter ${countryName}. An ${countryName} visa sticker on your passport is the symbol of your visa eligibility. ${countryName} is one of the Schengen countries providing entry access shortly to all Schengen visa holders. Bangladesh has an Honorary Consulate of ${countryName} in Dhaka.`}
                button={false}
                img_src="https://visathing.com/images/banner_bg_pattern.svg"
            />
            <div className="container mx-auto px-6 ">
                {/* Country Services */}
                <section className="mb-8 p-8 rounded-lg">
                    <h2 className="text-xl font-extrabold mb-6 text-gray-900 flex items-center">
                        {/* <FontAwesomeIcon icon={faDollarSign} className="text-blue-500 mr-2" /> */}
                        Visa Processing Service Available for {countryName} from Nzogo
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countryServices.length > 0 ? countryServices.map((service) => (
                            <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6 transition-transform transform hover:scale-105">
                                <h3 className="text-md font-semibold mb-2">{service.service_name}</h3>
                                <p className="text-gray-700 mb-1 flex items-center text-xs">
                                    <FontAwesomeIcon icon={faDollarSign} className="mr-2 text-gray-500" />
                                    Fee: {service.fee} {service.currency}
                                </p>
                                <p className="text-gray-700 flex items-center text-xs">
                                    <FontAwesomeIcon icon={faTag} className="mr-2 text-gray-500" />
                                    Category: {service.category.name}
                                </p>
                            </div>
                        )) : <p className="text-gray-600 text-xs">No data to show</p>}
                    </div>
                </section>

                {/* Visa Categories */}
                <section className="mb-8 p-8 rounded-lg">
                    <h2 className="text-xl font-extrabold mb-6 text-gray-900 flex items-center">
                        {/* <FontAwesomeIcon icon={faTag} className="text-blue-500 mr-2" /> */}
                        Categories of {countryName} Visas Available for Bangladeshi Citizens
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-lg p-6 transition-transform transform hover:scale-105">
                        {categories.length > 0 ? (
                            <ul className="list-disc list-inside text-xs">
                                {categories.map((category) => (
                                    <li key={category.id} className="flex items-center mb-4">
                                        <FontAwesomeIcon icon={faPassport} className="text-blue-600 mr-2" />
                                        <span className="text-md font-semibold">{category.category_name} Visa</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600 text-xs">No data to show</p>
                        )}
                    </div>
                </section>

                {/* Process Steps */}
                <section className="p-8 rounded-lg">
                    <h2 className="text-xl font-extrabold mb-6 text-gray-900 flex items-center">
                        {/* <FontAwesomeIcon icon={faTasks} className="text-blue-500 mr-2" /> */}
                        Visa Processing Service Available for {countryName} from VISAThing
                    </h2>
                    <div className="space-y-6">
                        {processSteps.length > 0 ? processSteps.map((step, ind) => (
                            <div key={step.id} className="bg-white border border-gray-200 rounded-lg p-6 transition-transform transform hover:scale-105">
                                <h3 className="text-md font-semibold mb-2">{ind + 1}. {step.title}</h3>
                                <p className="text-gray-700 mb-2 text-xs">{step.description}</p>

                            </div>
                        )) : <p className="text-gray-600 text-xs">No data to show</p>}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CountryDetails;
