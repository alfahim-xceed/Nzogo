import Banner from "../components/Banner";
import DiscoverWorld from "../components/DiscoverWorld";
import HomeForm from "../components/HomeForm";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <HomeForm/>
            <DiscoverWorld/>
        </div>
    )

}

export default Home;
