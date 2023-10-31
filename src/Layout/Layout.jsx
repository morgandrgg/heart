import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import Header from "../Components/Header/Header";
import Routers from "../Routers/Routers";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    const location = useLocation();

    // Check if the path starts with "/error"
    const isErrorPage = location.pathname.startsWith("/error");

    return (
        <>
            {/* Conditionally render the header if not on an error page */}
            {!isErrorPage && (
                <div>
                    <Header />
                </div>
            )}

            <div>
                <Routers />
            </div>

            {/* Conditionally render the footer if not on an error page */}
            {!isErrorPage && (
                <div>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Layout;
