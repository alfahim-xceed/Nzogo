
import { Route, Routes } from 'react-router-dom';


import CountryList from '../pages/admin/manage_category_country_required_document/CountryList';
import CategoryList from '../pages/admin/manage_category_country_required_document/CategoryList';
import ManageCategoryCountryRequiredDocument from '../pages/admin/manage_category_country_required_document/ManageCategoryCountryRequiredDocument';

const ManageCategoryCountryRequiredDocumentRoutes = () => (
    <Routes>
        <Route path="/category-list/:country_id" element={<CategoryList />} />
        <Route path="/country-list" element={<CountryList />} />
        <Route path="/manage/:country_id/:category_id" element={<ManageCategoryCountryRequiredDocument />} />
    </Routes>
);

export default ManageCategoryCountryRequiredDocumentRoutes;
