import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
    return (
        <>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    );
};

export default HomePage;