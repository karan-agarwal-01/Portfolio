import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink  } from 'react-scroll';
import { Link as RouterLink } from 'react-router';


const Nav = () => {
    return (
        <nav className="fixed z-10 flex justify-between items-center border rounded-full w-[80%] my-4 mx-[10%] py-3 px-12 text-white border-gray-600 glass2">
            <ScrollLink to='home' smooth={true} duration={500} className="text-lg font-semibold font-aldrich">KARAN AGARWAL</ScrollLink>
            <div className="flex justify-between gap-10">
                <ScrollLink to='about' smooth={true} duration={500} className="text-md font-light hover:text-violet-400 cursor-pointer">ABOUT</ScrollLink>
                <ScrollLink to='skills' smooth={true} duration={500} className="text-md font-light hover:text-violet-400 cursor-pointer">SKILLS</ScrollLink>
                <ScrollLink to='portfolio' smooth={true} duration={500}  className="text-md font-light hover:text-violet-400 cursor-pointer">PORTFOLIO</ScrollLink>
                <ScrollLink to='contact' smooth={true} duration={500} className="text-md font-light hover:text-violet-400 cursor-pointer">CONTACT</ScrollLink>
            </div>
            <RouterLink to ='/resume'>
            <div className="font-light border rounded-full px-3.5 py-2 text-violet-400 cursor-pointer hover:text-violet-200 flex items-center gap-1">
                <p className="text-sm font-medium">RESUME</p> 
                <FaArrowRight />
            </div>
            </RouterLink>
        </nav>
    );
}

export default Nav;