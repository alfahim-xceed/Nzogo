import { Route, Routes } from 'react-router-dom';
import ExploreEmbassies from '../pages/general/embassies/ExploreEmbassies';
import EmbassyDetails from '../pages/general/embassies/EmbassyDetails';
import ExploreCountries from '../pages/general/countries/ExploreCountries';
import CountryDetails from '../pages/general/countries/CountryDetails';


const ManageGeneralRoutes = () => (
    <Routes>

        <Route path="/embassies" element={<ExploreEmbassies/>}/>
        <Route path="/embassy-details/:id" element={<EmbassyDetails/>}/>
        <Route path="/countries" element={<ExploreCountries/>}/>
        <Route path="/country-details/:id" element={<CountryDetails/>}/>
    </Routes>
);

export default ManageGeneralRoutes;
