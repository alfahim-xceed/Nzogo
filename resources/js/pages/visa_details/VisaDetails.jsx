import { useParams } from "react-router-dom";
import ApplyCard from "./ApplyCard";
import Banner from "./Banner";
import Documents from "./Documents";
import { useGetSearchResultQuery } from "../../services/search_api";

const VisaDetails = () => {
    const { travelling_to_id, visa_category_id } = useParams();

    const { data: details, isLoading, error } = useGetSearchResultQuery({ travelling_to_id, visa_category_id });

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Error loading. Please try again later.</p>;
    }
    if (details.length <= 0) {
        console.log("details ", details);

        return <>No data found</>;
    }

    // const bannerInfo = ;
    console.log(" cc ", details);

    return (
        <div>
            {details && <>
                <Banner data={["BD", details.categoryCountryRequiredDocuments[0]?.country.name, details.categoryCountryRequiredDocuments[0]?.category.name]} />
                <div className="w-[80%] mx-auto">
                    <div className="mt-9  flex items-start justify-evenly">
                        <div className="w-1/2">
                            <Documents data={details.categoryCountryRequiredDocuments} />
                        </div>
                        <div className="w-1/3">
                            <ApplyCard data={{ "country": details.countryServices, "visa": details.visas }} />
                        </div>
                    </div>

                </div>
            </>}

        </div>
    )
}
export default VisaDetails;
