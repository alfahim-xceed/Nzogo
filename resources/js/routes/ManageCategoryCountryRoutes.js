// /admin/manage-category-country

import { Route, Routes } from 'react-router-dom';

import AddCategoryCountry from "../pages/admin/manage_category_country/AddCategoryCountry";

import CategoryCountryList from "../pages/admin/manage_category_country/CategoryCountryList.jsx";

import UpdateCategoryCountry from "../pages/admin/manage_category_country/UpdateCategoryCountry";

const ManageCategoryCountryRoutes = () => (
    <Routes>
        <Route path="/list" element={<CategoryCountryList/>}/>
        <Route path="/create" element={<AddCategoryCountry/>}/>
        <Route path="/update/:id" element={<UpdateCategoryCountry/>}/>
    </Routes>
);

export default ManageCategoryCountryRoutes;
