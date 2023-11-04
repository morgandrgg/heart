import {Navigate, Route, Routes} from "react-router-dom";
import Home from '../Pages/Home'
import AboutUs from "../Pages/AboutUs.jsx";
import Error from "../Pages/Error.jsx"
import Donate from '../Components/DonationForm/DonationForm.jsx'
import Faq from "../Pages/Faq.jsx";
import OurStory from "../Pages/OurStory.jsx";
import FullPartnership from "../Pages/FullPartnership.jsx";
import PartnershipForm from "../Components/PartnershipForm/PartnershipForm.jsx";
import ShortPartnership from "../Pages/ShortPartneship.jsx";
import OurTeam from "../Pages/OurTeam.jsx";

const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>
            <Route path='fullpartnership' element={<FullPartnership/>}/>
            <Route path='shortPartnership' element={<ShortPartnership/>}/>
            <Route path='partnershipForm' element={<PartnershipForm/>}/>
            <Route path='ourteam' element={<OurTeam/>}/>
            <Route path='ourStory' element={<OurStory/>}/>
            <Route path='donatenow' element={<Donate/>}/>



            <Route path='faq' element={<Faq/>}/>
            <Route path="error" element={<Error status="404" />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    )
}

export default Routers