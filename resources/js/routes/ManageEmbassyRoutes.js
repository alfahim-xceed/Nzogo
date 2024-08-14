import { Route, Routes } from 'react-router-dom';
import EmbassyList from '../pages/admin/manage_embassy/EmbassyList';
import CreateEmbassy from '../pages/admin/manage_embassy/CreateEmbassy';
import UpdateEmbassy from '../pages/admin/manage_embassy/UpdateEmbassy';


const ManageEmbassyRoutes = () => (
    <Routes>
        <Route path="/embassy-list" element={<EmbassyList/>}/>
        <Route path="/create-embassy" element={<CreateEmbassy/>}/>
        <Route path="/update/:id" element={<UpdateEmbassy/>}/>
    </Routes>
);

export default ManageEmbassyRoutes;
