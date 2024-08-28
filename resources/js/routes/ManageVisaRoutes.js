import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AddVisa from "../pages/admin/manage_visa/AddVisa";
import AddVisaType from "../pages/admin/manage_visa/components/manage_visa_type/AddVisaType";
import UpdateVisaType from "../pages/admin/manage_visa/components/manage_visa_type/UpdateVisaType";
import UpdateVisa from "../pages/admin/manage_visa/UpdateVisa";
import VisaList from "../pages/admin/manage_visa/VisaList";
import AddVisaService from '../pages/admin/manage_visa/components/manage_visa_service/AddVisaService';
import UpdateVisaService from '../pages/admin/manage_visa/components/manage_visa_service/UpdateVisaService';
import AddDocument from '../pages/admin/manage_visa/components/manage_required_document/AddDocument';
import UpdateDocument from '../pages/admin/manage_visa/components/manage_required_document/UpdateDocument';

const ManageVisaRoutes = () => (
    <Routes>
        {/* manage visa */}
        <Route path="/visa-list" element={<VisaList />} />
        <Route path="/add-visa" element={<AddVisa />} />
        <Route path="/update/:id" element={<UpdateVisa />} />

        {/* manage visa type */}
        <Route path="/add-visa-type/:visa_id" element={<AddVisaType />} />
        <Route path="/update/visa-type/:visa_type_id" element={<UpdateVisaType />} />

        {/* manage visa service */}
        <Route path="/add-visa-service/:visa_id" element={<AddVisaService/>}/>
        <Route path="/update/visa-service/:visa_id/:visa_service_id" element={<UpdateVisaService/>}/>

        {/* manage documents */}
        <Route path="/add-document/:visa_id" element={<AddDocument/>}/>
        <Route path="/update/document/:document_id" element={<UpdateDocument/>}/>

    </Routes>
);

export default ManageVisaRoutes;
