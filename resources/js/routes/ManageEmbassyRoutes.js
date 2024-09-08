import { Route, Routes } from 'react-router-dom';
import EmbassyList from '../pages/admin/manage_embassy/EmbassyList';
import CreateEmbassy from '../pages/admin/manage_embassy/CreateEmbassy';
import UpdateEmbassy from '../pages/admin/manage_embassy/UpdateEmbassy';
import CountryList from '../pages/admin/manage_embassy/CountryList';


const ManageEmbassyRoutes = () => (
    <Routes>
        <Route path="/country-list" element={<CountryList/>}/>
        <Route path="/list/:id" element={<EmbassyList/>}/>
        <Route path="/create/:id" element={<CreateEmbassy/>}/>
        <Route path="/update/:id" element={<UpdateEmbassy/>}/>
    </Routes>
);

export default ManageEmbassyRoutes;
