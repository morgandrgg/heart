import {Navigate, Route, Routes} from "react-router-dom";
import Home from '../Pages/Home'
import AboutUs from "../Pages/AboutUs.jsx";
import Error from "../Pages/Error.jsx"
import Donate from '../Components/DonationForm/DonationForm.jsx'
import Faq from "../Pages/Faq.jsx";
import OurStory from "../Pages/OurStory.jsx";

const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>
            <Route path='donatenow' element={<Donate/>}/>
            <Route path='ourStory' element={<OurStory/>}/>


            <Route path='faq' element={<Faq/>}/>
            <Route path="error" element={<Error status="404" />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    )
}

export default Routers