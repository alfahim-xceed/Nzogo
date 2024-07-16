import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';
import LoginComponent from './components/LoginComponent';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ExampleComponent />} />
            <Route path="/login" element={<LoginComponent />} />
        </Routes>
    );
}

export default AppRoutes;
