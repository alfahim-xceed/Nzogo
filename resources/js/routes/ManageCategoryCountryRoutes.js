
import { Route, Routes } from 'react-router-dom';


import CountryList from '../pages/admin/manage_category_country/CountryList.jsx';
import ManageCategoryCountry from '../pages/admin/manage_category_country/ManageCategoryCountry';

const ManageCategoryCountryRoutes = () => (
    <Routes>
        <Route path="/country-list" element={<CountryList/>}/>

        <Route path="/manage/:id" element={<ManageCategoryCountry/>}/>
    </Routes>
);

export default ManageCategoryCountryRoutes;
