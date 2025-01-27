import { CiSaveDown2 } from 'react-icons/ci';
import profileImg from '../assets/profile.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="text-center py-20">
            <div className="avatar">
                <div className="w-36 rounded-full bg-orange-50">
                    <img src={profileImg} />
                </div>
            </div>
            <h2 className="text-4xl font-bold">Hi! I am  Jony Das <span className="wave">👋</span></h2>
            <h1 className="text-5xl font-extrabold mt-4">Mern Stack developer</h1>
            <p className="text-gray-600 mt-4">I am a Mern Stack developer from Bangladesh with 1 years of experience.</p>
            <div className="flex justify-center mt-6 space-x-4">
                <button className="btn bg-black text-white ">Connect with me <FaLongArrowAltRight className='mt-1' /></button>
                <a href="https://drive.google.com/file/d/12hj6U0vphXN2lmnet184M_kkP-FzKdM9/view?usp=sharing" className='btn btn-outline' >My Resume <CiSaveDown2 /></a>
            </div>
        </section>
    );
};

export default Banner;