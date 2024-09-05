import { Route, Routes } from 'react-router-dom';

import CreateProcessStep from '../pages/admin/manage_process_step/CreateProcessStep';
import UpdateProcessStep from '../pages/admin/manage_process_step/UpdateProcessStep';
import ProcessStepList from '../pages/admin/manage_process_step/ProcessStepList';


const ManageProcessStepRoutes = () => (
    <Routes>
        <Route path="/list" element={<ProcessStepList/>}/>
        <Route path="/create" element={<CreateProcessStep/>}/>
        <Route path="/update/:id" element={<UpdateProcessStep/>}/>
    </Routes>
);

export default ManageProcessStepRoutes;
