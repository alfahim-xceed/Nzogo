import React from 'react';
import { useDispatch } from 'react-redux';
// Adjust the import path
import { clearToken, clearId } from "../slices/authSlice"
import { useGetMyProfileQuery, useLogoutUserMutation } from '../services/api';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [logoutUser, { isLoading, isError }] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: details, error, loading } = useGetMyProfileQuery();

    if (loading) {
        return <>Loading..</>
    }

    // console.log("data is ", details);
    const handleLogout = async () => {

        try {

            const res = await logoutUser().unwrap(); // Use unwrap to handle the resolved value or throw an error

            dispatch(clearToken()); // Clear user data from Redux
            dispatch(clearId());
            localStorage.removeItem("token");
            localStorage.removeItem("id");

            toast.success("Logout successful");
            navigate("/");

        } catch (error) {
            console.error(':', error);
            toast.error("Logout failed");
        }
    };

    return (
        <aside className="bg-gray-300 text-white min-h-screen p-4 sticky top-0 h-screen">
            <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-black">Menu</h2>
            <nav>
                <ul>
                    {details?.role_id == 1 && <>

                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/role-list">
                                    <span className="text-black dark:text-black">Manage Roles</span>
                                </Link>
                            </div>
                        </li>

                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/user-list">
                                    <span className="text-black dark:text-black">Manage Users</span>
                                </Link>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/country-list">
                                    <span className="text-black dark:text-black">Manage Country</span>
                                </Link>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/visa-category-list">
                                    <span className="text-black dark:text-black">Manage visa category</span>

                                </Link>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/visa-type-list">
                                    <span className="text-black dark:text-black">Manage visa type</span>
                                </Link>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/service-list">
                                    <span className="text-black dark:text-black">Manage service</span>
                                </Link>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/manage-visa/visa-list">
                                    <span className="text-black dark:text-black">Manage visa</span>
                                </Link>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                                <Link to="/admin/manage-embassy/embassy-list">
                                    <span className="text-black dark:text-black">Manage embassy</span>
                                </Link>
                            </div>
                        </li>
                    </>}
                    {/* <li className="mb-2">
                        <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                            <span className="text-black dark:text-black">Overview</span>
                        </div>
                    </li> */}
                    <li className="mb-2">
                        <div className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                            <Link to="/user/applied-visa-list">
                                <span className="text-black dark:text-black">Applied Visa</span>
                            </Link>
                        </div>
                    </li>
                    <li className="mb-2">
                        <a href="#transactions" className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                            <span className="text-black dark:text-black">Transactions</span>
                        </a>
                    </li>

                    <li className="mt-4">
                        <button
                            onClick={handleLogout}
                            disabled={isLoading}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            {isLoading ? 'Logging out...' : 'Logout'}
                        </button>
                        {isError && <p className="text-red-500 mt-2">Logout failed. Please try again.</p>}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
