import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className="fixed z-10 flex justify-between items-center border rounded-full w-[80%] my-4 mx-[10%] py-3 px-12 text-white border-gray-600 glass2">
            <Link to='home' smooth={true} duration={500} className="text-lg font-semibold font-aldrich">KARAN AGARWAL</Link>
            <div className="flex justify-between gap-10">
                <Link to='about' smooth={true} duration={500} className="text-md font-light hover:text-violet-400 cursor-pointer">ABOUT</Link>
                <Link to='skills' smooth={true} duration={500} className="text-md font-light hover:text-violet-400 cursor-pointer">SKILLS</Link>
                <Link to='portfolio' smooth={true} duration={500}  className="text-md font-light hover:text-violet-400 cursor-pointer">PORTFOLIO</Link>
                <Link to='contact' smooth={true} duration={500} className="text-md font-light hover:text-violet-400 cursor-pointer">CONTACT</Link>
            </div>
            <div className="font-light border rounded-full px-3.5 py-2 text-violet-500 cursor-pointer hover:text-violet-300 flex items-center gap-1">
                <p className="text-sm font-medium">RESUME</p> 
                <FaArrowRight />
            </div>
        </nav>
    );
}

export default Nav;