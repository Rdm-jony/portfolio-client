import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-gray-200 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Us Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
                    <p className="text-gray-400">
                        We provide top-notch solutions tailored to your needs. Our team is dedicated to delivering innovative and reliable services.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-indigo-400 transition-colors duration-200"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-indigo-400 transition-colors duration-200"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-indigo-400 transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                    <p className="text-gray-400 mb-2 flex gap-2">
                        <CgMail className="text-2xl" />
                        <span className="font-semibold "> Email:</span>{" "}
                        <a
                            href="mailto:jonydascse@gmail.com"
                            className="hover:text-indigo-400 transition-colors duration-200"
                        >
                            jonydascse@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-400 mb-2 flex gap-2">
                        <FaPhoneAlt className="text-2xl" />
                        <span className="font-semibold">Phone:</span>{" "}
                        <a
                            href="tel:+8801748174056"
                            className="hover:text-indigo-400 transition-colors duration-200"
                        >
                            +8801748174056
                        </a>
                    </p>
                    <p className="text-gray-400 flex gap-2">
                        <FaMapMarkerAlt className="text-2xl" />
                        <span className="font-semibold">Location:</span> Dhaka, Bangladesh
                    </p>
                </div>
            </div>

            {/* Follow Us Section */}
            <div className="mt-8 text-center border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex justify-center gap-4">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p className="text-gray-500 mt-4">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </div>

    );
};

export default Footer;