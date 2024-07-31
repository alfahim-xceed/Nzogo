import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Profile from './pages/auth/Profile';
import Layout from './components/Layout';
import UserList from './pages/admin/manage_users/UserList';
import UpdateUser from './pages/admin/manage_users/UpdateUser';
import CreateUser from './pages/admin/manage_users/CreateUser';
import ManageNid from './components/profile/ManageNid';
import ManagePassport from './components/profile/ManagePassport';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import ManageProfile from './components/profile/ManageProfile';

function AppRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path='/' element={<Layout />}>
                    <Route path="/user/profile" element={<Profile />} />
                    <Route path="/admin/user-list" element={<UserList/>} />
                    <Route path="/admin/create-user" element={<CreateUser/>}/>
                    <Route path="/admin/update-user" element={<UpdateUser/>}/>
                    <Route path="/user/manage-nid" element={<ManageNid/>}/>
                    <Route path="/user/manage-passport" element={<ManagePassport/>}/>
                    <Route path="/user/manage-profile" element={<ManageProfile/>}/>
                </Route>
            </Routes>
            <ToastContainer />

        </>
    );
}

export default AppRoutes;
