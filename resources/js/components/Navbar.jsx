import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isInformationOpen, setIsInformationOpen] = useState(false);

    const token = useSelector((state) => state.auth.token);


    let companyTimeout, servicesTimeout, informationTimeout;

    const handleMouseEnter = (setDropdownOpen) => {
        clearTimeout(companyTimeout);
        clearTimeout(servicesTimeout);
        clearTimeout(informationTimeout);
        setIsCompanyOpen(false);
        setIsServicesOpen(false);
        setIsInformationOpen(false);
        setDropdownOpen(true);
    };

    const handleMouseLeave = (setDropdownOpen, dropdownType) => {
        if (dropdownType === 'company') {

            companyTimeout = setTimeout(() => setDropdownOpen(false), 300);
        } else if (dropdownType === 'services') {

            servicesTimeout = setTimeout(() => setDropdownOpen(false), 300);
        } else if (dropdownType === 'information') {

            informationTimeout = setTimeout(() => setIsInformationOpen(false), 300);
        }
    };

    return (
        <nav className="bg-blue-100 p-4 shadow-md">
            <div className={`container mx-auto ${isOpen ? 'flex-col' : 'flex'} justify-between ${isOpen ? 'items-start' : 'items-center'}`}>
                <div className="flex items-center">
                    <button
                        className="md:hidden text-blue-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <span className="text-2xl font-bold text-blue-900 ml-2">
                        <Link to="/">
                            <span className="text-gray-500">VISA</span>Thing
                        </Link>
                    </span>
                </div>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <div
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(setIsCompanyOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsCompanyOpen, 'company')}
                    >
                        <div className="block mt-4 md:inline-block md:mt-0 text-blue-900 hover:text-blue-700 mr-4" role="button">
                            <span className="mr-1">Company</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        {isCompanyOpen && (
                            <div className="z-10 absolute left-0 mt-2 py-2 w-96 bg-white rounded-md shadow-xl transition-opacity duration-300">
                                <div className="grid grid-cols-2 gap-4 p-2">
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="About VISAThing" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">About VISAThing</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="Career" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Career</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="News & Press" className="w-5 h-5 mr-2" />

                                        <span className="text-sm">News & Press</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="Media Library" className="w-5 h-5 mr-2" />

                                        <span className="text-sm"> Media Library</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="Business Networks" className="w-5 h-5 mr-2" />

                                        <span className="text-sm">Business Networks</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="Contact Us" className="w-5 h-5 mr-2" />

                                        <span className="text-sm">Contact Us</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>



                    <div
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(setIsInformationOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsInformationOpen, 'information')}
                    >
                        <div className="block mt-4 md:inline-block md:mt-0 text-blue-900 hover:text-blue-700 mr-4">
                            <span className="mr-1">Information</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        {isInformationOpen && (
                            <div className="z-10 absolute left-0 mt-2 py-2 w-96 bg-white rounded-md shadow-xl transition-opacity duration-300">
                                <div className="grid grid-cols-2 gap-4 p-4">
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="E-Visa" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Explore countries</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="Document Legalization" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Explore visa fees</span>
                                    </a>
                                </div>
                            </div>

                        )}
                    </div>


                    <div
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsServicesOpen, 'services')}
                    >
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 text-blue-900 hover:text-blue-700 mr-4">
                            <span className="mr-1">Services</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                        {isServicesOpen && (
                            <div className="z-10 absolute left-0 mt-2 py-2 w-96 bg-white rounded-md shadow-xl transition-opacity duration-300">
                                <div className="grid grid-cols-2 gap-4 p-4">
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="E-Visa" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">E-Visa</span>
                                    </a>
                                    <a href="#" className="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <img src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1714999400370.svg" alt="Document Legalization" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Document Legalization</span>
                                    </a>
                                </div>
                            </div>

                        )}
                    </div>



                    <div className="flex items-center mt-4 md:mt-0 mr-4">
                        <input
                            type="text"
                            placeholder="Tracking ID"
                            className="px-2 py-1 border border-gray-300 rounded-l-md text-sm focus:outline-none"
                        />
                        <button className="bg-blue-900 text-white px-2 py-1 rounded-r-md hover:bg-blue-700">
                            <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4h13M8 8h13m-7 8h7m-7 4h7M5 20l-4-4m0 0l4-4m-4 4h18"></path>
                            </svg>
                        </button>
                    </div>

                    {token ? <button className="mt-4 md:mt-0 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700">
                        <Link to="/user/profile">
                            My Profile
                        </Link>
                    </button> :
                        <div className="block mt-4 md:inline-block md:mt-0 text-blue-900 hover:text-blue-700 mr-4">
                            <Link to="/login">
                                Log In
                            </Link>
                        </div>
                    }



                </div>
            </div>
        </nav>
    );
};

export default Navbar;
