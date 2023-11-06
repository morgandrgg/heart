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
import OurPartners from "../Pages/OurPartners.jsx";
import SponsorAchild from "../Pages/SponsorAchild.jsx";
import GiveToMissionary from "../Pages/GiveToMissionary.jsx";
import FoodProgrammes from "../Pages/FoodProgrammes.jsx";
import HeartOfGeneration from "../Pages/HeartOfGeneration.jsx";

const Routers = () =>{
    return(
        <Routes>
        {/*========Start of Routing====*/}
            <Route path="/" element={<Home/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>

                {/*========Start of reusable Components====*/}
            <Route path='donatenow' element={<Donate/>}/>
            <Route path='partnershipForm' element={<PartnershipForm/>}/>
                 {/*========End of reusable Components====*/}

                 {/*========Start of Join the team / Current Openings====*/}
            <Route path='fullpartnership' element={<FullPartnership/>}/>
            <Route path='shortPartnership' element={<ShortPartnership/>}/>
                 {/*========End of Join the team / Current Openings=======*/}

                 {/*========Start of Our Organization / Who we are=======*/}
            <Route path='ourStory' element={<OurStory/>}/>
            <Route path='ourteam' element={<OurTeam/>}/>
            <Route path='ourpartners' element={<OurPartners/>}/>
                 {/*========End of Our Organization / Who we are=======*/}

                 {/*========Start of Our Programmes / Programmes=======*/}
            <Route path='sponsorAchild' element={<SponsorAchild/>}/>
            <Route path='givetomissionary' element={<GiveToMissionary/>}/>
            <Route path='foodProgrammes' element={<FoodProgrammes/>}/>
            <Route path='heartofGeneartions' element={<HeartOfGeneration/>}/>
                {/*========End of Our Programmes / Programmes=======*/}

                 {/*========Start of faq and error page=======*/}
            <Route path='faq' element={<Faq/>}/>
            <Route path="error" element={<Error status="404" />} />
            <Route path="*" element={<Navigate to="/error" />} />
                 {/*========End of faq and error page=======*/}

        {/*========End of Routing====*/}
        </Routes>
    )
}

export default Routers