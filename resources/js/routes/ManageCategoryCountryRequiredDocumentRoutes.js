// /admin/manage-category-country-required-documents

import { Route, Routes } from 'react-router-dom';

import AddCategoryCountryRequiredDocument from "../pages/admin/manage_category_country_required_document/AddCategoryCountryRequiredDocument";

import CategoryCountryRequiredDocumentList from "../pages/admin/manage_category_country_required_document/CategoryCountryRequiredDocumentList";

import UpdateCategoryCountryRequiredDocument from "../pages/admin/manage_category_country_required_document/UpdateCategoryCountryRequiredDocument";

const ManageCategoryCountryRequiredDocumentRoutes = () => (
    <Routes>
        <Route path="/list" element={<CategoryCountryRequiredDocumentList/>}/>
        <Route path="/create" element={<AddCategoryCountryRequiredDocument/>}/>
        <Route path="/update/:id" element={<UpdateCategoryCountryRequiredDocument/>}/>
    </Routes>
);

export default ManageCategoryCountryRequiredDocumentRoutes;
