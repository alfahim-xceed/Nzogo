import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/Banner";

const Contact = () => {
    return (
        <div className="min-h-screen text-gray-800 ">
            <Banner
                title="Get in Touch with Nzogo!"
                desc="Do you have questions or need assistance with your visa application? Reach out to VISAthing! Our dedicated team is here to help you every step of the way. Contact us today for personalized support and expert guidance."
                button={false}
                img_src="https://visathing.com/images/contact_us.svg"
            />
            <div className=" py-16 px-4 w-[70%] mx-auto">


                <div className="text-center mb-12">
                    <p className="text-gray-600">Contact Us</p>
                    <h2 className="text-md font-bold text-blue-600">
                        Contact Nzogo Bangladesh
                    </h2>
                </div>

                {/* Contact Options */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Call Us */}
                    <div className="bg-white shadow-md p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-md mb-3" />
                        <h3 className="text-md font-semibold mb-2 text-gray-800">Call Us</h3>
                        <div className="text-xs">
                            <p className="text-gray-600 mb-1">Saturday - Thursday (9:30 AM to 6:30 PM)</p>
                            <a href="tel:+8801967777788" className="text-blue-600 font-bold hover:underline">
                                (+880) 1967 777 788
                            </a>
                        </div>
                    </div>

                    {/* Chat to Support */}
                    <div className="bg-white shadow-md p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-md mb-3" />
                        <h3 className="text-md font-semibold mb-2 text-gray-800">Chat with Support</h3>
                        <div className="text-xs">
                            <p className="text-gray-600 mb-1">We're here to help.</p>
                            <a href="mailto:cr@Nzogo.com" className="text-blue-600 font-bold hover:underline">
                                cr@Nzogo.com
                            </a>
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="bg-white shadow-md p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-md mb-3" />
                        <h3 className="text-md font-semibold mb-2 text-gray-800">Visit Us</h3>
                        <div className="text-xs">
                            <p className="text-gray-600 mb-1">Visit our office HQ.</p>
                            <p className="text-gray-600">
                                1st Floor, Homestead Gulshan Link Tower, DCC TA-99,
                                Gulshan-Badda Link Road, Gulshan-1, Dhaka-1212
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="container mx-auto mt-14">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9933194781254!2d90.41322357517577!3d23.79138918924371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b26a2f15d7%3A0x25df7895d021f49!2sNzogo!5e0!3m2!1sen!2sbd!4v1632334336878!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
