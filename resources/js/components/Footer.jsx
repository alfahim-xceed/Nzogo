import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTwitter, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="pt-36">
            <footer className="bg-[#14152c] text-white">
                {/* Top part */}
                <div className="py-10 border-b border-gray-600">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Company Links */}
                        <div>
                            <h5 className="text-md font-semibold mb-4">Company</h5>
                            <ul className="space-y-2 text-xs">
                                <li><a className="hover:underline" href="/bangladesh/about-us/">About Nzogo</a></li>
                                <li><a className="hover:underline" href="/bangladesh/career/">Career</a></li>
                                <li><a className="hover:underline" href="/bangladesh/news/">News</a></li>
                                <li><a className="hover:underline" href="/bangladesh/media/">Media Library</a></li>
                                <li><a className="hover:underline" href="/bangladesh/business-network/">Business Network</a></li>
                                <li><a className="hover:underline" href="/bangladesh/contact-us/">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Information Links */}
                        <div>
                            <h5 className="text-md font-semibold mb-4">Information</h5>
                            <ul className="space-y-2 text-xs">
                                <li><a className="hover:underline" href="/bangladesh/find-requirements/">Find VISA Requirements</a></li>
                                <li><a className="hover:underline" href="/bangladesh/find-embassies-and-consulates/">Embassies and Consulates</a></li>
                                <li><a className="hover:underline" href="/bangladesh/countries/">Explore Countries</a></li>
                                <li><a className="hover:underline" href="/bangladesh/find-visa-fees-and-processing-time/">Explore Visa Fees</a></li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h5 className="text-md font-semibold mb-4">Services</h5>
                            <ul className="space-y-2 text-xs">
                                <li><a className="hover:underline" href="/bangladesh/services/document-legalization/">Document Legalization</a></li>
                                <li><a className="hover:underline" href="/bangladesh/services/visa-consultancy/">Visa Consultancy</a></li>
                                <li><a className="hover:underline" href="/bangladesh/services/visa-processing-in-bangladesh/">Visa Processing in Bangladesh</a></li>
                                <li><a className="hover:underline" href="/bangladesh/services/evisa-processing/">E-visa Processing</a></li>
                                <li><a className="hover:underline" href="/bangladesh/services/visa-processing-in-india/">Visa Processing in India</a></li>
                            </ul>
                        </div>

                        {/* Tools & Solutions Links */}
                        <div>
                            <h5 className="text-md font-semibold mb-4">Tools & Solutions</h5>
                            <ul className="space-y-2 text-xs">
                                <li><a className="hover:underline" href="/bangladesh/eligibility-checker/">Checklist Builder</a></li>
                                <li><a className="hover:underline" href="/bangladesh/itinerary-generator/">Itinerary Generator</a></li>
                                <li><a className="hover:underline" href="/bangladesh/corporate-panel/">Corporate Panel</a></li>
                                <li><a className="hover:underline" href="/bangladesh/book-an-appointment/">Book An Appointment</a></li>
                            </ul>
                        </div>

                        {/* Logo and Disclaimer */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <a href="/" className="block mb-6">
                                    <img src="https://VISAThing.com/images/landing/logo-white.svg" alt="Nzogo logo" className="w-36" />
                                </a>
                            </div>
                            <div>
                                <h5 className="text-md font-semibold">Disclaimer</h5>
                                <p className="text-xs mt-2">Due to the periodic changes of information/ requirement/ document, Nzogo doesn’t provide any confirmation, guarantee or representation, express or implied, that the information contained or referenced herein is completely accurate or final.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle part */}
                <div className="py-10 ">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div>
                            <h5 className="text-md font-semibold mb-4">Contact Us</h5>
                            <ul className="space-y-2 text-xs">
                                <li><span>Email: </span><a className="hover:underline" href="mailto:cr@Nzogo.com">cr@Nzogo.com</a></li>
                                <li><span>Phone: </span><a className="hover:underline" href="tel:+8801967777788">(+880) 1967 777 788</a></li>
                            </ul>


                            <ul className="flex space-x-4 mt-4">
                                <li>
                                    <a
                                        href="https://www.facebook.com/Nzogo"
                                        className="text-blue-600 hover:text-gray-400"
                                        aria-label="Facebook"
                                        style={{ color: '#1877F2' }}
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/Nzogo_official"
                                        className="hover:text-gray-400"
                                        aria-label="Instagram"
                                        style={{ color: '#C13584' }}
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wa.me/+88001958596925"
                                        className="hover:text-gray-400"
                                        aria-label="Whatsapp"
                                        style={{ color: '#25D366' }}
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/Nzogo"
                                        className="text-blue-400 hover:text-gray-400"
                                        aria-label="Twitter"
                                        style={{ color: '#1DA1F2' }}
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/Nzogo"
                                        className="hover:text-gray-400"
                                        aria-label="LinkedIn"
                                        style={{ color: '#0077B5' }}
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/c/Nzogobd"
                                        className="hover:text-gray-400"
                                        aria-label="YouTube"
                                        style={{ color: '#FF0000' }}
                                    >
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.tiktok.com/@Nzogobd"
                                        className="hover:text-gray-400"
                                        aria-label="TikTok"
                                        style={{ color: '#000000' }}
                                    >
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </a>
                                </li>
                            </ul>


                        </div>

                        {/* Office Address */}
                        <div>
                            <h5 className="text-md font-semibold mb-4">Office Address</h5>
                            <p className="text-xs">1st Floor, Homestead Gulshan Link Tower, DCC TA-99, Gulshan-Badda link Road, Gulshan-1, Dhaka-1212</p>
                            <a href="https://goo.gl/maps/DnCwiTBqaEmtUevV9" className="inline-block mt-4 text-sm text-indigo-500 hover:underline text-xs">View Location</a>
                        </div>
                    </div>
                </div>

                {/* Bottom part */}
                <div className="py-6 bg-gray-900">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xs">&copy;2023 Nzogo | All Rights Reserved</p>
                        <ul className="flex space-x-4 mt-4 md:mt-0 text-xs">
                            <li><a href="/bangladesh/terms-conditions/" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="/bangladesh/privacy-policy/" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="/bangladesh/disclaimer/" className="hover:underline">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
