// /admin/manage-required-documents/list

import { Route, Routes } from 'react-router-dom';

import AddRequiredDocument from "../pages/admin/manage_required_document/AddRequiredDocument";

import RequiredDocumentList from "../pages/admin/manage_required_document/RequiredDocumentList";

import UpdateRequiredDocument from '../pages/admin/manage_required_document/UpdateRequiredDocument';

const ManageRequiredDocumentRoutes = () => (
    <Routes>
        <Route path="/list" element={<RequiredDocumentList/>}/>
        <Route path="/create" element={<AddRequiredDocument/>}/>
        <Route path="/update/:id" element={<UpdateRequiredDocument/>}/>
    </Routes>
);

export default ManageRequiredDocumentRoutes;
