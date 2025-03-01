import { Link as ScrollLink  } from 'react-scroll';
import { Link as RouterLink } from 'react-router';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { GoDownload } from "react-icons/go";


const Nav = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

    const toggleSidebar = () => {
        return setIsSideBarOpen(!isSideBarOpen)
    }

    console.log(isSideBarOpen)

    return (
        <>
        <nav className="fixed z-10 flex justify-between items-center border rounded-full lg:w-[80%] md:w-[90%] w-[96%] lg:my-4 md:my-4 my-3 lg:mx-[10%] md:mx-[5.5%] mx-[2%] lg:py-3 md:py-3 py-2.5 lg:px-12 md:px-8 px-4 text-white border-gray-600 glass2">
            <RxHamburgerMenu onClick={toggleSidebar} className="lg:hidden md:hidden text-xl" />
            <div>
            <ScrollLink to='home' smooth={true} duration={500} className="lg:text-lg md:text-lg text-lg font-semibold font-aldrich">KARAN AGARWAL</ScrollLink>
            </div>
            <div className="lg:flex md:flex hidden justify-between lg:gap-10 md:gap-7">
                <ScrollLink to='about' smooth={true} duration={500} className="lg:text-md md:text-sm font-light hover:text-violet-400 cursor-pointer">ABOUT</ScrollLink>
                <ScrollLink to='skills' smooth={true} duration={500} className="lg:text-md md:text-sm font-light hover:text-violet-400 cursor-pointer">SKILLS</ScrollLink>
                <ScrollLink to='portfolio' smooth={true} duration={500}  className="lg:text-md md:text-sm font-light hover:text-violet-400 cursor-pointer">PORTFOLIO</ScrollLink>
                <ScrollLink to='contact' smooth={true} duration={500} className="lg:text-md md:text-sm font-light hover:text-violet-400 cursor-pointer">CONTACT</ScrollLink>
            </div>
            <RouterLink to ='/resume'>
            <div className="font-light border rounded-full px-3.5 py-2 text-violet-400 cursor-pointer hover:text-violet-200 flex items-center gap-1">
                <p className="text-sm font-medium">RESUME</p> 
                <GoDownload />
            </div>
            </RouterLink>
        </nav>
        <div onClick={toggleSidebar} className={`fixed top-0 right-0 h-full w-[100%] z-20 bg-black text-white opacity-85 shadow-lg p-5 transform transition-transform duration-300 ${
                    isSideBarOpen ? "translate-x-0" : "translate-x-full"
        }`}>
            <RxCross2 className='text-[2rem] mb-4 float-right' onClick={toggleSidebar} />
            <div className="h-[100vh] text-white flex flex-col gap-10 justify-center items-center">
                <ScrollLink to='about' smooth={true} duration={500} onClick={toggleSidebar} className="text-3xl font-light hover:text-violet-400 cursor-pointer">ABOUT</ScrollLink>
                <ScrollLink to='skills' smooth={true} duration={500} onClick={toggleSidebar} className="text-3xl font-light hover:text-violet-400 cursor-pointer">SKILLS</ScrollLink>
                <ScrollLink to='portfolio' smooth={true} duration={500} onClick={toggleSidebar} className="text-3xl font-light hover:text-violet-400 cursor-pointer">PORTFOLIO</ScrollLink>
                <ScrollLink to='contact' smooth={true} duration={500} onClick={toggleSidebar} className="text-3xl font-light hover:text-violet-400 cursor-pointer">CONTACT</ScrollLink>
            </div>
        </div>
        </>
    );
}

export default Nav;