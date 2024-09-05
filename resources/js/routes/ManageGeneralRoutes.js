import { Route, Routes } from 'react-router-dom';
import ExploreEmbassies from '../pages/general/embassies/ExploreEmbassies';
import EmbassyDetails from '../pages/general/embassies/EmbassyDetails';
import ExploreCountries from '../pages/general/countries/ExploreCountries';


const ManageGeneralRoutes = () => (
    <Routes>

        <Route path="/embassies" element={<ExploreEmbassies/>}/>
        <Route path="/embassy-details/:id" element={<EmbassyDetails/>}/>
        <Route path="/countries" element={<ExploreCountries/>}/>
    </Routes>
);

export default ManageGeneralRoutes;
