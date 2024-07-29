import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Profile from './pages/auth/Profile';

function AppRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </>
    );
}

export default AppRoutes;
