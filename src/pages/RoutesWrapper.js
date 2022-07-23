import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import CartDrawer from "../Components/CartDrawer/"

function RoutesWrapper() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
            <CartDrawer />
        </>
    )
}

export default RoutesWrapper