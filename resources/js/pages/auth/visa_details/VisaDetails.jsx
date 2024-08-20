import ApplyCard from "./ApplyCard";
import Banner from "./Banner";
import Documents from "./Documents";

const VisaDetails = () => {
    return (
        <div>
            <Banner />
            <div className="w-[80%] mx-auto">
                <div className="mt-9  flex items-start justify-evenly">
                    <div className="w-1/2">
                        <Documents />
                    </div>
                    <div className="w-1/3">
                        <ApplyCard />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default VisaDetails;
