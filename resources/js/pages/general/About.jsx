import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBriefcase, faBullhorn, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../components/Banner';

const About = () => {
    return (
        <div>

            <Banner
                title="About Nzogo!"
                desc="Welcome to Nzogo, your premier travel technology partner. We are dedicated to transforming the travel experience by leveraging cutting-edge technology and innovative solutions"
                button={false}
                img_src="https://visathing.com/images/about_us.svg"
            />

            <div>
                <div className="container mx-auto px-6 lg:px-8">
                    {/* What is Nzogo! */}
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">
                            <img src="https://visathing.com/_next/image/?url=%2Fimages%2Fabout-us%2Fwhat_is_visathing_thumb.png&w=1920&q=75" alt="What is Nzogo!" className="w-full md:w-1/2 rounded-lg shadow-md" />
                            <div className="md:w-1/2 mt-6 md:mt-0">
                                <h2 className="text-xl font-extrabold mb-4 text-gray-900 flex items-center">
                                    <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 mr-3" />
                                    What is Nzogo!
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Nzogo is your ultimate partner for navigating the complexities of visa processing. We offer expert support and personalized solutions to ensure a smooth and efficient visa application process.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What We Do? */}
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
                            <img src="https://visathing.com/images/landing/appointment.svg" alt="What We Do?" className="w-full md:w-1/2 rounded-lg shadow-md" />
                            <div className="md:w-1/2 mt-6 md:mt-0">
                                <h2 className="text-xl font-extrabold mb-4 text-gray-900 flex items-center">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-blue-500 mr-3" />
                                    What We Do?
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Our team of experts provides comprehensive visa services including application assistance, document preparation, and consular support to ensure a hassle-free experience.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Mission */}
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">
                            <img src="https://visathing.com/images/mission.svg" alt="Our Mission" className="w-full md:w-1/2 rounded-lg shadow-md" />
                            <div className="md:w-1/2 mt-6 md:mt-0">
                                <h2 className="text-xl font-extrabold mb-4 text-gray-900 flex items-center">
                                    <FontAwesomeIcon icon={faBullhorn} className="text-blue-500 mr-3" />
                                    Our Mission
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Our mission is to empower individuals and businesses by providing exceptional visa services, ensuring that they achieve their international travel and business goals with ease and confidence.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Vision */}
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
                            <img src="https://visathing.com/images/vision.svg" alt="Our Vision" className="w-full md:w-1/2 rounded-lg shadow-md" />
                            <div className="md:w-1/2 mt-6 md:mt-0">
                                <h2 className="text-xl font-extrabold mb-4 text-gray-900 flex items-center">
                                    <FontAwesomeIcon icon={faEye} className="text-blue-500 mr-3" />
                                    Our Vision
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Our vision is to be the leading global provider of visa processing services, known for our dedication to excellence, innovation, and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Why choose Nzogo for your visa processing needs? */}
                    <section>
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">
                            <img src="https://unispaces.sgp1.cdn.digitaloceanspaces.com/nebula/images/1716835035743.svg" alt="Why choose Nzogo?" className="w-full md:w-1/2 rounded-lg shadow-md" />
                            <div className="md:w-1/2 mt-6 md:mt-0">
                                <h2 className="text-xl font-extrabold mb-4 text-gray-900 flex items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-blue-500 mr-3" />
                                    Why choose Nzogo for your visa processing needs?
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Choosing Nzogo means opting for a team of dedicated professionals who offer personalized and efficient visa processing solutions. We prioritize your needs, providing expert advice and support every step of the way to ensure a smooth and successful visa application.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
