
import { Route, Routes } from 'react-router-dom';

import AddCategoryCountry from "../pages/admin/manage_category_country/AddCategoryCountry";

import CategoryCountryList from "../pages/admin/manage_category_country/CategoryCountryList.jsx";

import UpdateCategoryCountry from "../pages/admin/manage_category_country/UpdateCategoryCountry";
import CountryList from '../pages/admin/manage_category_country/CountryList.jsx';

const ManageCategoryCountryRoutes = () => (
    <Routes>
        <Route path="/list" element={<CountryList/>}/>
        <Route path="/category-country-list/:id" element={<CategoryCountryList/>}/>
        <Route path="/create/:id" element={<AddCategoryCountry/>}/>
        <Route path="/update/:id" element={<UpdateCategoryCountry/>}/>
    </Routes>
);

export default ManageCategoryCountryRoutes;
