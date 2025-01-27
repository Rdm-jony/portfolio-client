import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Banner from "../Pages/Banner";
import About from "../Pages/About";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
                <Banner></Banner>
                <About></About>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;