import { useParams } from "react-router-dom";
import ProfileForm from "../../../components/profile/ProfileForm";
import ManagePassport from "../../auth/ManagePassport";
import ManageNid from "../../auth/ManageNid";

const ManageUser = () => {
    const { id } = useParams();
    console.log("id ", id);
    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Profile</h1>
                <ProfileForm id={id} />
            </div>

            <ManagePassport user_id={id} />
            <ManageNid user_id={id} />
        </>
    )
}

export default ManageUser;
