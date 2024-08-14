import ManageVisaDetails from "./components/ManageVisaDetails"
import DocumentList from "./components/manage_required_document/DocumentList";
import VisaServiceList from "./components/manage_visa_service/VisaServiceList";
import VisaTypeList from "./components/manage_visa_type/VisaTypeList"

const UpdateVisa = () => {

    return (
        <div className="max-w-4xl mx-auto p-6">
            <ManageVisaDetails />
            <hr className="custom-line" />
            <VisaTypeList />
            <hr className="custom-line" />
            <VisaServiceList />
            <hr className="custom-line" />
            <DocumentList />
        </div>
    )
}
export default UpdateVisa;
