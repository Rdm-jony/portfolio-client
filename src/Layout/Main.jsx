import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-gray-50 dark:bg-black ">
            <Navbar></Navbar>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;