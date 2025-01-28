import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePostUserMesssageMutation } from "../ReduxStore/baseApi";
import Swal from "sweetalert2";

const Contact = () => {
    const [postContsactInfo, { isLoading }] = usePostUserMesssageMutation()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const contactInfo = { name, email, message }
        const data = await postContsactInfo(contactInfo).unwrap()
        if (data.success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "your message send to user email!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset()
        }
    }
    return (

        <div id="contact" className="p-6 mb-16 dark:bg-slate-950 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-center text-3xl font-semibold my-10 mb-10">Contact Information</h2>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6 flex justify-center  rounded-xl  ">

                    <div className="space-y-6">
                        <div className="flex  items-center gap-4">
                            <CgMail className="text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                                <p className="text-gray-700">Feel free to reach us via email at:</p>
                                <a
                                    href="mailto:jonydascse@gmail.com"
                                    className="text-indigo-600 hover:underline"
                                >
                                    jonydascse@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center  gap-4">
                            <FaPhoneAlt className="text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                                <p className="text-gray-700">You can also call us at:</p>
                                <a
                                    href="https://wa.me/01332324919"
                                    className="text-indigo-600 hover:underline"
                                >
                                    +8801332324919
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h3>

                                <p className="text-gray-700">My current location:</p>
                                <Link to="https://maps.app.goo.gl/vQ5pJLqCqyUR7fWy8">
                                    <p className="text-indigo-600 hover:underline">Chittagong, Bangladesh</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/2">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="w-full mt-2 p-3 border border-gray-300 bg-white dark:bg-slate-950 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full mt-2 p-3 border border-gray-300 dark:bg-slate-950 bg-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="description"
                            name="message"
                            placeholder="Enter your message"
                            rows="4"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 bg-white dark:bg-slate-950 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>


                    <div className="text-center">
                        <button
                            type="submit"
                            className={`bg-black ${isLoading?'cursor-not-allowed':"cursor-pointer"} text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300`}
                        >
                            {
                                isLoading ? "Loading..." : " Submit"
                            }

                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;