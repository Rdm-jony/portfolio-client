import { CiLocationArrow1 } from "react-icons/ci";
import Theme from "../Theme/Theme";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="../#banner" className="hover:text-gray-700">Home</a></li>
                        <li><a href="../#about" className="hover:text-gray-700">About me</a></li>
                        <li><a href="../#skills" className="hover:text-gray-700">Skills </a></li>
                        <li><a href="../#projects" className="hover:text-gray-700">My projects</a></li>
                        <li><a href="../#contact" className="hover:text-gray-700">Contact me</a></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">JONY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="../#banner" className="hover:text-gray-700">Home</a></li>
                    <li><a href="../#about" className="hover:text-gray-700">About me</a></li>
                    <li><a href="../#skills" className="hover:text-gray-700">Skills </a></li>
                    <li><a href="../#projects" className="hover:text-gray-700">My projects</a></li>
                    <li><a href="../#contact" className="hover:text-gray-700">Contact me</a></li>

                </ul>
            </div>
            <div className="navbar-end mr-5">
                <a className="btn btn-outline" href="#contact">Connect <CiLocationArrow1 /></a>
            </div>
            <Theme></Theme>
        </div>
    );
};

export default Navbar;