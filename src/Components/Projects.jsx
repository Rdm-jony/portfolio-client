import { IoLogoGithub } from "react-icons/io5";
import { useGetProjectsQuery } from "../ReduxStore/baseApi";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageLoading from "./PageLoading";

const Projects = () => {
    const { data: projects = [], isLoading } = useGetProjectsQuery()
    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    return (
        <div id="projects" className="mb-16">
            <h2 className="text-center text-3xl font-semibold my-10">My Projects</h2>
            <div className="flex lg:flex-row flex-col gap-10">

                {
                    projects?.map(project => <div key={project._id} className="group">
                        <div

                            className="relative  border-4 border-black lg:w-96 h-64 bg-gray-100 shadow-lg overflow-hidden rounded-lg "
                        >
                            <img
                                src={project?.img}
                                alt="Project"
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-6 space-y-4 
          translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                            >
                                <h2 className="text-2xl font-bold">{project?.title}</h2>
                                <p className="text-sm text-gray-300 text-center line-clamp-2">
                                    {project?.description}
                                </p>

                                <div className="flex justify-between gap-4 mt-4 w-full">
                                    <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-400 transition">
                                        <IoLogoGithub className="text-lg" />
                                        <span className="text-sm font-medium"><Link to={project?.gitServer}>Git Server</Link></span>
                                    </div>

                                    <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-400 transition">
                                        <IoLogoGithub className="text-lg" />
                                        <span className="text-sm font-medium"><Link to={project?.gitClient}>Git Client</Link></span>
                                    </div>

                                    <Link to={project?.site}>
                                        <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-400 transition">
                                            <FaLaptop className="text-lg" />
                                            <span className="text-sm font-medium">Live Site</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link to={`/details/${project?._id}`}><button type="button" className="btn bg-black w-full text-white group">View Details</button>
                        </Link>
                    </div>
                    )
                }


            </div>
        </div>

    );
};

export default Projects;