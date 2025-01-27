import { GoProjectTemplate } from 'react-icons/go';
import profileImg from '../assets/profile.png'
import firebase from '../assets/firebase.png'
import figma from '../assets/figma.png'
import mongodb from '../assets/mongodb.png'
import redux from '../assets/redux.png'
import router from '../assets/router.png'
import vs from '../assets/vs.png'
import git from '../assets/git.png'
import { IoCodeSlashOutline, IoSchoolOutline } from 'react-icons/io5';

const About = () => {
    const tools = [{ img: firebase, title: "Firebase" }, { img: figma, title: 'Figma' }, { img: mongodb, title: "Mongodb" }, { img: redux, title: "Redux" }, { img: router, title: "React Route" }, { img: vs, title: 'Vs Code' }, { img: git, title: 'Git hub' }]
    return (
        <section id="about" className="py-16 px-4  bg-gray-50 flex gap-20">
            <div className="avatar w-1/2">
                <div className="w-full rounded-xl bg-orange-50">
                    <img className='' src={profileImg} />
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold">About me</h2>
                <p className="text-gray-600 mt-4 text-start">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">

                    <div>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="card  bg-base-100 card-xs shadow-sm border border-transparent  hover:border-r-4 hover:border-b-4 hover:border-black transition-all">
                                <div className="text-start space-y-3 p-5">
                                    <IoCodeSlashOutline className='text-xl' />
                                    <h2 className="font-bold">Languages</h2>
                                    <p>HTML, CSS, JavaScript, React.js, Next.js</p>

                                </div>
                            </div>
                            <div className="card  bg-base-100 card-xs shadow-sm border border-transparent  hover:border-r-4 hover:border-b-4 hover:border-black transition-all">
                                <div className="text-start space-y-3 p-5">
                                    <IoSchoolOutline className='text-xl' />
                                    <h2 className="font-bold">Education</h2>
                                    <p>BSC in Computer Science</p>

                                </div>
                            </div>
                            <div className="card bg-base-100 card-xs shadow-sm border border-transparent hover:border-r-4 hover:border-b-4 hover:border-black transition-all">
                                <div className="text-start space-y-3 p-5">
                                    <GoProjectTemplate className='text-xl' />
                                    <h2 className="font-bold">Projects</h2>
                                    <p>Built more than 5 projects</p>

                                </div>
                            </div>

                        </div>
                        <div>
                            <p className='my-2'>Tools i use</p>
                            <div className='flex gap-5'>
                                {
                                    tools?.map((tool, idx) => <div key={idx} className='border p-3 rounded-md tooltip' data-tip={tool.title}>
                                        <img className='w-10 h-10' src={tool.img} alt="" />
                                    </div>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;