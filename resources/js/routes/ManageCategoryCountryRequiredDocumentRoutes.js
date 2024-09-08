
import { Route, Routes } from 'react-router-dom';

import AddCategoryCountryRequiredDocument from "../pages/admin/manage_category_country_required_document/AddCategoryCountryRequiredDocument";

import CategoryCountryRequiredDocumentList from "../pages/admin/manage_category_country_required_document/CategoryCountryRequiredDocumentList";

import UpdateCategoryCountryRequiredDocument from "../pages/admin/manage_category_country_required_document/UpdateCategoryCountryRequiredDocument";
import CountryList from '../pages/admin/manage_category_country_required_document/CountryList';

const ManageCategoryCountryRequiredDocumentRoutes = () => (
    <Routes>
        <Route path="/list/:id" element={<CategoryCountryRequiredDocumentList/>}/>
        <Route path="/country-list" element={<CountryList/>}/>
        <Route path="/create/:id" element={<AddCategoryCountryRequiredDocument/>}/>
        <Route path="/update/:id" element={<UpdateCategoryCountryRequiredDocument/>}/>
    </Routes>
);

export default ManageCategoryCountryRequiredDocumentRoutes;
