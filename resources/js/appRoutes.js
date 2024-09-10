import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Profile from './pages/auth/Profile';
import Layout from './components/Layout';
import UserList from './pages/admin/manage_users/UserList';
import UpdateUser from './pages/admin/manage_users/UpdateUser';
import CreateUser from './pages/admin/manage_users/CreateUser';
import ManageNid from './pages/auth/ManageNid';
import ManagePassport from './pages/auth/ManagePassport';
import ManageProfile from './pages/auth/ManageProfile';
import ManageUser from './pages/admin/manage_users/ManageUser';
import CountryList from './pages/admin/manage_countries/CountryList';
import CreateCountry from './pages/admin/manage_countries/CreateCountry';
import UpdateCountry from './pages/admin/manage_countries/UpdateCountry';
import VisaCategoryList from './pages/admin/manage_visa_category/VisaCategoryList';
import CreateVisaCategory from './pages/admin/manage_visa_category/CreateVisaCategory';
import UpdateVisaCategory from './pages/admin/manage_visa_category/UpdateVisaCategory';
import VisaTypeList from './pages/admin/manage_visa_type/VisaTypeList';
import CreateVisaType from './pages/admin/manage_visa_type/CreateVisaType';
import UpdateVisaType from './pages/admin/manage_visa_type/UpdateVisaType';
import ServiceList from './pages/admin/manage_services/ServiceList';
import CreateService from './pages/admin/manage_services/CreateService';
import UpdateService from './pages/admin/manage_services/UpdateService';
import RoleList from './pages/admin/manage_roles/RoleList';
import CreateRole from './pages/admin/manage_roles/CreateRole';
import UpdateRole from './pages/admin/manage_roles/UpdateRole';
import ManageVisaRoutes from './routes/ManageVisaRoutes';
import ManageEmbassyRoutes from './routes/ManageEmbassyRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import VisaDetails from './pages/visa_details/VisaDetails';
import AppliedVisaList from './pages/AppliedVisaList';
import ManageRequiredDocumentRoutes from './routes/ManageRequiredDocumentRoutes';
import ManageCategoryCountryRequiredDocumentRoutes from './routes/ManageCategoryCountryRequiredDocumentRoutes';
import ManageCategoryCountryRoutes from './routes/ManageCategoryCountryRoutes';
import ManageCountryServiceRoutes from './routes/ManageCountryServiceRoutes';
import ManageGeneralRoutes from './routes/ManageGeneralRoutes';
import ManageProcessStepRoutes from './routes/ManageProcessStepRoutes';
import ManageAppointmentRoutes from './routes/ManageAppointmentRoutes';
import BookAppointment from './pages/appointment/BookAppointment';
import AppointmentList from './pages/appointment/AppointmentList';
import AppointmentDetails from './pages/appointment/AppointmentDetails';
function AppRoutes() {
    const location = useLocation();
    const hideNavbarRoutes = ['/admin/register', '/admin/login'];

    return (
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/visa/details/:travelling_to_id/:visa_category_id" element={<VisaDetails />} />
                {/* general routes */}
                <Route path="/explore/*" element={<ManageGeneralRoutes />} />

                {/* appointment routes */}
                {/* <Route path="/appointment/*" element={<ManageAppointmentRoutes/>}/> */}
                <Route path="/appointment/book" element={<BookAppointment />} />

                <Route path="/" element={<Layout />}>
                    {/* user profile */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/user/manage-profile" element={<ManageProfile />} />


                    {/* manage user */}
                    <Route path="/admin/user-list" element={<UserList />} />
                    <Route path="/admin/create-user" element={<CreateUser />} />
                    <Route path="/admin/update-user" element={<UpdateUser />} />

                    {/* manage nid */}
                    <Route path="/user/manage-nid" element={<ManageNid />} />
                    {/* manage passport */}
                    <Route path="/user/manage-passport" element={<ManagePassport />} />

                    {/* particular user applied visa list */}
                    <Route path="/user/applied-visa-list" element={<AppliedVisaList />} />


                    {/* ADMIN */}

                    {/* manage user */}
                    <Route path="admin/user-list" element={<UserList />} />
                    <Route path="admin/manage-user/:id" element={<ManageUser />} />

                    {/* manage country */}
                    <Route path="admin/country-list" element={<CountryList />} />
                    <Route path="admin/add-country" element={<CreateCountry />} />
                    <Route path="admin/country/update/:id" element={<UpdateCountry />} />

                    {/* manage visa category */}
                    <Route path="admin/visa-category-list" element={<VisaCategoryList />} />
                    <Route path="admin/add-visa-category" element={<CreateVisaCategory />} />
                    <Route path="admin/visa-category/update/:id" element={<UpdateVisaCategory />} />

                    {/* manage visa type */}
                    <Route path="admin/visa-type-list" element={<VisaTypeList />} />
                    <Route path="admin/add-visa-type" element={<CreateVisaType />} />
                    <Route path="admin/visa-type/update/:id" element={<UpdateVisaType />} />

                    {/* manage service */}
                    <Route path="admin/service-list" element={<ServiceList />} />
                    <Route path="admin/add-service" element={<CreateService />} />
                    <Route path="admin/service/update/:id" element={<UpdateService />} />

                    {/* role */}
                    <Route path="admin/role-list" element={<RoleList />} />
                    <Route path="admin/add-role" element={<CreateRole />} />
                    <Route path="admin/role/update/:id" element={<UpdateRole />} />

                    {/* manage required docs */}
                    <Route path="/admin/manage-required-documents/*" element={<ManageRequiredDocumentRoutes />} />

                    {/* /admin/manage-category-country-required-documents */}
                    <Route path="/admin/manage-category-country-required-documents/*" element={<ManageCategoryCountryRequiredDocumentRoutes />} />

                    {/* manage category country */}
                    <Route path="/admin/manage-category-country/*" element={<ManageCategoryCountryRoutes />} />

                    {/* manage country service */}
                    <Route path="/admin/manage-country-service/*" element={<ManageCountryServiceRoutes />} />

                    {/* manage visa */}
                    <Route path="/admin/manage-visa/*" element={<ManageVisaRoutes />} />

                    {/* manage embassy */}
                    <Route path="/admin/manage-embassy/*" element={<ManageEmbassyRoutes />} />

                    {/* manage process step */}
                    <Route path="/admin/manage-process-step/*" element={<ManageProcessStepRoutes />} />

                    {/* manage appointment */}
                    <Route path="/appointment/list" element={<AppointmentList />} />
                    <Route path="/appointment/details/:id" element={<AppointmentDetails />} />



                </Route>

            </Routes>
            <ToastContainer />

        </>
    );
}

export default AppRoutes;
