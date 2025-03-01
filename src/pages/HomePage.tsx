import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const HomePage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Set animation duration
    }, []);
 
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