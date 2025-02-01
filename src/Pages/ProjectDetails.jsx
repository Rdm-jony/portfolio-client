import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../ReduxStore/baseApi";
import { FaGithub, FaLaptop } from "react-icons/fa";
import VideoModal from "../Components/VideoModal";
import PageLoading from "../Components/PageLoading";

const ProjectDetails = () => {
    const { id } = useParams()
    const { data: project, isLoading } = useGetProjectByIdQuery(id, { skip: !id })
    const handleModal = () => {
        document.getElementById('my_modal_3').showModal()
    }
    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    const { title, video, img, gitServer, gitClient, description, site, tools } = project;
    return (
        <div className="max-w-full  bg-gradient-to-r border-2 lg:mx-20 lg:my-20 border-black from-indigo-200 to-blue-200 shadow-lg rounded-xl overflow-hidden   hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 group">
            <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="relative w-full md:w-1/3">
                    <img src={img} alt={title} className="w-fit md:h-full object-cover rounded-t-xl md:rounded-l-xl" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                            onClick={() => handleModal()}
                            className="text-white bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
                        >
                            Watch Demo Video
                        </a>
                    </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-6 bg-white dark:bg-slate-950 w-full md:w-2/3">
                    <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center md:text-left">{title}</h2>
                    <p className="text-justify  font-light">{description}</p>
                    {
                        project?.admin && <div>
                            <p className="font-semibold text-orange-400">Admin Email: {`< ${project?.admin?.email} >`}</p>
                            <p className="font-semibold text-orange-400">Admin Pass: {`< ${project?.admin?.pass} >`}</p>
                        </div>
                    }
                    <div className="flex flex-wrap gap-5">
                        {
                            tools?.map((tool, idx) => <div key={idx} className='border p-3 rounded-md tooltip' data-tip={tool.name}>
                                <img className='w-10 h-10' src={tool.img} alt="" />
                            </div>)
                        }
                    </div>
                    {/* GitHub Links */}
                    <div className="flex justify-center gap-6 text-lg text-gray-700 dark:text-white md:justify-start">

                        <a
                            href={gitServer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-indigo-800 transition-colors"
                        >
                            <FaGithub className="text-2xl" /> <span>Git Server</span>
                        </a>
                        {gitClient && (
                            <a
                                href={gitClient}

                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2  hover:text-indigo-800 transition-colors"
                            >
                                <FaGithub className="text-2xl" /> <span>Git Client</span>
                            </a>
                        )}
                    </div>

                    {/* Live Preview */}
                    <div className="flex justify-center md:justify-start">
                        <a
                            href={site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
                        >
                            <FaLaptop className="mr-3 text-xl" /> Live Preview
                        </a>
                    </div>
                </div>
            </div>
            <VideoModal url={video}></VideoModal>
        </div>


    );
};

export default ProjectDetails;