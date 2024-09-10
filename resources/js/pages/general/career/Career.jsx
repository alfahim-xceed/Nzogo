import JobPosition from "./components/JobPosition";
import WhyJoinUs from "./components/WhyJoinUs";
import Benefits from "./components/Benefits";
import JoinUsProcess from "./components/JoinUsProcess";
import Banner from "../../../components/Banner";

const Career = () => {
    return (
        <div className="min-h-screen text-gray-800">

            <Banner
                title="Join the Nzogo Team!"
                desc="Explore exciting career opportunities with Nzogo! We're always on the lookout for passionate individuals who are eager to contribute to our mission of simplifying the travel experience through innovative technology and exceptional service. Join us and be part of a dynamic team that is shaping the future of travel."
                button={false}
                img_src="https://visathing.com/images/career.svg"
            />

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="mb-32">
                        <JobPosition />
                    </div>

                    <div className="mb-32">
                        <WhyJoinUs />
                    </div>

                    <div className="mb-32">
                        <Benefits />
                    </div>

                    <div className="mb-32">
                        <JoinUsProcess />
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Career;
