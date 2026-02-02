import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <div>FOOTER</div>
        </>
    )
};

export default DefaultLayout