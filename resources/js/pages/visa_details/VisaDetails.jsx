import { useParams } from "react-router-dom";
import ApplyCard from "./ApplyCard";
import Banner from "./Banner";
import Documents from "./Documents";
import { useGetSearchResultQuery } from "../../services/search_api";

const VisaDetails = () => {
    const {travelling_to_id,visa_category_id}=useParams();

    const {data:details,isLoading,error}=useGetSearchResultQuery({travelling_to_id,visa_category_id});

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Error loading. Please try again later.</p>;
    }
    if(details.length<=0){
    console.log("details ",details);

        return <>No data found</>;
    }

    const bannerInfo=[details[0].from_country,details[0].to_country,details[0].visa_category];

    return (
        <div>
            <Banner data={bannerInfo}/>
            <div className="w-[80%] mx-auto">
                <div className="mt-9  flex items-start justify-evenly">
                    <div className="w-1/2">
                        <Documents data={details[0].documents}/>
                    </div>
                    <div className="w-1/3">
                        <ApplyCard data={details[0]}/>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default VisaDetails;
