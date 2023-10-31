import {Routes, Route, Navigate} from "react-router-dom";
import Home from '../Pages/Home'
import AboutUs from "../Pages/AboutUs.jsx";
import Error from "../Pages/Error.jsx"
import Donate from '../Components/DonationForm/DonationForm.jsx'
const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>
            <Route path='donatenow' element={<Donate/>}/>


            <Route path="error" element={<Error status="404" />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    )
}

export default Routers