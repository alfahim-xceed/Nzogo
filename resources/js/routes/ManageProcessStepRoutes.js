import { Route, Routes } from 'react-router-dom';

import CreateProcessStep from '../pages/admin/manage_process_step/CreateProcessStep';
import UpdateProcessStep from '../pages/admin/manage_process_step/UpdateProcessStep';
import ProcessStepList from '../pages/admin/manage_process_step/ProcessStepList';
import CountryList from '../pages/admin/manage_process_step/CountryList';


const ManageProcessStepRoutes = () => (
    <Routes>
        <Route path="/list" element={<CountryList />} />
        <Route path="/step-list/:id" element={<ProcessStepList />} />
        <Route path="/create/:id" element={<CreateProcessStep />} />
        <Route path="/update/:id" element={<UpdateProcessStep />} />
    </Routes>
);

export default ManageProcessStepRoutes;
