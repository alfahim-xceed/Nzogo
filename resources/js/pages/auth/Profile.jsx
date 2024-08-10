import { useSelector } from "react-redux";
import NidCard from "../../components/profile/NidCard";
import PassportCard from "../../components/profile/PassportCard";
import ProfileCard from "../../components/profile/ProfileCard";
import { useGetMyProfileQuery } from "../../services/api";

const Profile = () => {
    const id=useSelector((state) => state.auth.id);

    // if(id==null){
    //     return <>Loading</>
    // }
    console.log("pp id ",id);
    const {data:details,error,isLoading}=useGetMyProfileQuery();

    if(isLoading){
        return <>Loading</>
    }

    // return <>None</>
    return (
        <>


            <ProfileCard/>
            <NidCard/>
            <PassportCard/>

        </>
    );
}

export default Profile;
