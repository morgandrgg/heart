import Header from '../Components/Header/Header'
import Routers from '../Routers/Routers'
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Routers/>
            </div>
            <div>
            <Footer/>
            </div>
        </>
    )
}

export default Layout