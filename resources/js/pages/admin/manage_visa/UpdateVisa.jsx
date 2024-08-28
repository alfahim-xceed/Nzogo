import { useParams } from "react-router-dom";
import ManageVisaDetails from "./components/ManageVisaDetails"
import DocumentList from "./components/manage_required_document/DocumentList";
import VisaServiceList from "./components/manage_visa_service/VisaServiceList";
import VisaTypeList from "./components/manage_visa_type/VisaTypeList"

const UpdateVisa = () => {
    const params=useParams();
    const id=params.id;
    return (
        <div className="max-w-4xl mx-auto p-6">
            <ManageVisaDetails id={id}/>
            <hr className="custom-line" />
            <VisaTypeList id={id}/>
            <hr className="custom-line" />
            <VisaServiceList id={id}/>
            <hr className="custom-line" />
            <DocumentList />
        </div>
    )
}
export default UpdateVisa;
