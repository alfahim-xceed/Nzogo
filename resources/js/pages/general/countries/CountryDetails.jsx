import { useParams } from "react-router-dom";
import { useGetCountryServiceListByCountryIdQuery } from "../../../services/country_service_api";
import { useGetCategoryCountryListQuery } from "../../../services/category_country_api";
import { useGetProcessStepListByCountryIdQuery } from "../../../services/process_step_api";

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
        return <div className="text-center py-10">Loading...</div>;
    }

    // Handle errors
    if (countryError || categoryError || processStepError) {
        return <div className="text-red-500 text-center py-10">Error loading data. Please try again later.</div>;
    }

    const countryName= countryServices.length>0 && (countryServices[0].country.name)||"";

    return (
        <div className="container mx-auto p-6">
            {/* Country Services */}
            <h2 className="text-3xl font-bold mb-9 text-center">{countryName} Visa details From Bangladesh.</h2>
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Country Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countryServices.length > 0 && countryServices?.map((service) => (
                        <div key={service.id} className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold">{service.service_name}</h3>
                            <p className="text-gray-700">Fee: {service.fee} {service.currency}</p>
                            <p className="text-gray-700">Category: {service.category.name}</p>
                        </div>
                    )) || <p>No data to show</p>}
                </div>
            </section>

            {/* Visa Categories */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Visa Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.length > 0 && categories?.map((category) => (
                        <div key={category.id} className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold">Category: {category.category_name}</h3>
                            <p className="text-gray-700">Country: {category.country_name}</p>
                        </div>
                    )) || <p>No data to show</p>}
                </div>
            </section>

            {/* Process Steps */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Process Steps</h2>
                <div className="space-y-6">
                    {processSteps.length > 0 && processSteps?.map((step) => (
                        <div key={step.id} className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-700 mb-2">{step.description}</p>
                            <p className="text-gray-500 text-sm">Country: {step.country.name}</p>
                        </div>
                    )) || <p>No data to show</p>}
                </div>
            </section>
        </div>
    );
}

export default CountryDetails;
