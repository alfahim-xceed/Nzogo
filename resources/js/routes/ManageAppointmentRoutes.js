// /admin/manage-category-country

import { Route, Routes } from 'react-router-dom';
import BookAppointment  from "../pages/appointment/BookAppointment";
import AppointmentList from '../pages/appointment/AppointmentList';
const ManageAppointmentRoutes = () => (
    <Routes>
        <Route path="/book" element={<BookAppointment/>}/>
        <Route path="/list" element={<AppointmentList/>}/>
    </Routes>
);

export default ManageAppointmentRoutes;
