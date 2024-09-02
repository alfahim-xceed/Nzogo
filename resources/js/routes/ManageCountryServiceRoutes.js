// /admin/manage-category-country

import { Route, Routes } from 'react-router-dom';

import AddCountryService from "../pages/admin/manage_country_service/AddCountryService";

import CountryServiceList from "../pages/admin/manage_country_service/CountryServiceList";

import UpdateCountryService from "../pages/admin/manage_country_service/UpdateCountryService";

const ManageCountryServiceRoutes = () => (
    <Routes>
        <Route path="/list" element={<CountryServiceList/>}/>
        <Route path="/create" element={<AddCountryService/>}/>
        <Route path="/update/:id" element={<UpdateCountryService/>}/>
    </Routes>
);

export default ManageCountryServiceRoutes;
