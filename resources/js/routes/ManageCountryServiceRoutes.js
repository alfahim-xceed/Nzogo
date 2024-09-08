
import { Route, Routes } from 'react-router-dom';

import AddCountryService from "../pages/admin/manage_country_service/AddCountryService";

import CountryServiceList from "../pages/admin/manage_country_service/CountryServiceList";

import UpdateCountryService from "../pages/admin/manage_country_service/UpdateCountryService";
import CountryList from '../pages/admin/manage_country_service/CountryList';

const ManageCountryServiceRoutes = () => (
    <Routes>
        <Route path="/list" element={<CountryList/>}/>
        <Route path="/country-service-list/:id" element={<CountryServiceList/>}/>
        <Route path="/create/:id" element={<AddCountryService/>}/>
        <Route path="/update/:id" element={<UpdateCountryService/>}/>
    </Routes>
);

export default ManageCountryServiceRoutes;
