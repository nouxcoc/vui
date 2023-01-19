import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <>
            <main>
                <Header />
                <Outlet />
                <Footer />
                {/* <HoltelsList /> */}
            </main>
        </>
    )
};

export default Layout;