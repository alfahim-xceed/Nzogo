import { Route, Routes } from 'react-router-dom';
import ExploreCountries from '../pages/general/ExploreCountries';
import ExploreEmbassies from '../pages/general/embassies/ExploreEmbassies';
import EmbassyDetails from '../pages/general/embassies/EmbassyDetails';


const ManageGeneralRoutes = () => (
    <Routes>
        <Route path="/countries" element={<ExploreCountries/>}/>
        <Route path="/embassies" element={<ExploreEmbassies/>}/>
        <Route path="/embassy-details/:id" element={<EmbassyDetails/>}/>
    </Routes>
);

export default ManageGeneralRoutes;
