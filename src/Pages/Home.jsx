import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto lg:px-0 px-5">
            <Banner></Banner>
            <About ></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;