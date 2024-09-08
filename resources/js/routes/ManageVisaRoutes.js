import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VisaList from '../pages/admin/manage_visa/VisaList';
import AddVisa from '../pages/admin/manage_visa/AddVisa';
import UpdateVisa from '../pages/admin/manage_visa/UpdateVisa';
import CountryList from '../pages/admin/manage_visa/CountryList';


const ManageVisaRoutes = () => (
    <Routes>

        <Route path="/list/:id" element={<VisaList />} />
        <Route path="/create/:id" element={<AddVisa />} />
        <Route path="/update/:id" element={<UpdateVisa />} />
        <Route path="/country-list" element={<CountryList/>}/>

    </Routes>
);

export default ManageVisaRoutes;
