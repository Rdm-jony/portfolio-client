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
        <div id='about' className='mb-16'>
            <h2 className="mb-10 text-3xl font-bold text-center">About me</h2>

            <section className=" px-4 lg:flex-row items-center flex-col  flex gap-20">

                <div className="avatar hidden lg:block w-1/2">
                    <div className="w-full rounded-xl bg-orange-50">
                        <img className='' src={profileImg} />
                    </div>
                </div>
                <div>
                    <p className="text-gray-600 dark:text-white mt-4 lg:text-start text-justify">I am expert in vanilla JavaScript, ReactJS, MongoDB, NodeJS, ExpressJS,React query,HTML, vanilla CSS,
                        Bootstrap, TailwindCSS ,daisyUI and Redux. I have done more than 12 projects with these. I am currently
                        studying for Masters of Computer Science from the Port City International University, Bangladesh.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">

                        <div>
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
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
                                <div className='flex flex-wrap gap-5'>
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
        </div>
    );
};

export default About;