import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearToken, clearId } from "../slices/authSlice";
import { useGetMyProfileQuery, useLogoutUserMutation } from '../services/api';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSignOutAlt, faUser, faFileInvoice, faList, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [logoutUser, { isLoading, isError }] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: details, error, loading } = useGetMyProfileQuery();

    const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
    const [isGeneralOpen, setIsGeneralOpen] = useState(false);

    if (loading) {
        return <>Loading..</>;
    }

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(clearToken());
            dispatch(clearId());
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            toast.success("Logout successful");
            navigate("/");
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error("Logout failed");
        }
    };

    return (
        <aside className="bg-gray-800 text-white min-h-screen w-64 p-4 sticky top-0">
            <h2 className="text-xl font-bold mb-6 text-center">Menu</h2>
            <nav className="text-xs">
                <ul className="space-y-4">

                    {/* Static menu items */}
                    <li>
                        <Link to="/user/applied-visa-list" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition duration-300">
                            <FontAwesomeIcon icon={faFileInvoice} />
                            <span>All Applied Visa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointment/list" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition duration-300">
                            <FontAwesomeIcon icon={faUser} />
                            <span>All Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#transactions" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition duration-300">
                            <FontAwesomeIcon icon={faList} />
                            <span>All Transactions</span>
                        </Link>
                    </li>

                    <hr className="border-gray-600 my-4" />

                    {/* Advance Settings dropdown */}
                    {details?.role_id == 1 && (
                        <>
                            <li>
                                <button
                                    onClick={() => setIsAdvanceOpen(!isAdvanceOpen)}
                                    className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-700 transition duration-300"
                                >
                                    <span className="flex items-center space-x-3">
                                        <FontAwesomeIcon icon={faCog} />
                                        <span>Advance Setting</span>
                                    </span>
                                    <FontAwesomeIcon icon={isAdvanceOpen ? faChevronUp : faChevronDown} />
                                </button>
                                {isAdvanceOpen && (
                                    <ul className="ml-4 mt-2 space-y-2 text-xs">
                                        <li>
                                            <Link to="/admin/manage-category-country/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Allocation Categories</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/manage-country-service/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Allocation Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/manage-process-step/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Allocation Process Steps</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/manage-category-country-required-documents/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Allocation Documents</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/manage-visa/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Allocation Visa</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <hr className="border-gray-600 my-4" />

                            {/* General Settings dropdown */}
                            <li>
                                <button
                                    onClick={() => setIsGeneralOpen(!isGeneralOpen)}
                                    className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-700 transition duration-300"
                                >
                                    <span className="flex items-center space-x-3">
                                        <FontAwesomeIcon icon={faCog} />
                                        <span>General Setting</span>
                                    </span>
                                    <FontAwesomeIcon icon={isGeneralOpen ? faChevronUp : faChevronDown} />
                                </button>
                                {isGeneralOpen && (
                                    <ul className="ml-4 mt-2 space-y-2 text-xs">
                                        <li>
                                            <Link to="/admin/role-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Roles</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/user-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Users</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Countries</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/visa-category-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Categories</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/visa-type-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Visa Types</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/service-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/manage-required-documents/list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Documents</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/manage-embassy/country-list" className="block p-2 rounded-md hover:bg-gray-700 transition duration-300">Embassies</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </>
                    )}

                    <li className="mt-6">
                        <button
                            onClick={handleLogout}
                            disabled={isLoading}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                            {isLoading ? 'Logging out...' : 'Logout'}
                        </button>
                        {isError && <p className="text-red-500 mt-2 text-sm">Logout failed. Please try again.</p>}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
