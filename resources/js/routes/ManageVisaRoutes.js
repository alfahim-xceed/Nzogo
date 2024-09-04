import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VisaList from '../pages/admin/manage_visa/VisaList';
import AddVisa from '../pages/admin/manage_visa/AddVisa';
import UpdateVisa from '../pages/admin/manage_visa/UpdateVisa';


const ManageVisaRoutes = () => (
    <Routes>

        <Route path="/list" element={<VisaList />} />
        <Route path="/create" element={<AddVisa />} />
        <Route path="/update/:id" element={<UpdateVisa />} />

    </Routes>
);

export default ManageVisaRoutes;
