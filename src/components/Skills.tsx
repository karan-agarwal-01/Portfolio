import { DiReact } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseLine, RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const Skills = () => {
    return (
        <div id='skills' className="h-auto lg:mx-20 md:mx-16 mx-8" data-aos="fade-up">
            <div className="lg:text-5xl md:text-[2.5rem] text-3xl font-medium text-gradient2 lg:ml-32 md:ml-2 ml-0 lg:w-[27%] md:w-[32%] w-[56%]">MY SKILLS</div>
            <div className="border-0 border-l border-gray-600 lg:w-[65%] md:w-[90%] w-[95%] lg:ml-52 md:ml-16 ml-4 mt-2 mb-8 font-aldrich lg:text-lg md:text-lg text-sm font-semibold text-violet-300 lg:px-10 md:px-6 px-3 lg:py-7 md:py-4 py-4 text-shadow">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
                    <div className="glass lg:w-[85%] md:w-[92%] w-[96%] lg:h-[11rem] md:h-[11rem] h-[10rem] lg:my-2 md:my-2 my-1 flex flex-col justify-center items-center gap-1 border-[1px] text-[#58c4dc] transition-transform duration-300 ease-in-out hover:scale-105">
                        <DiReact className="lg:text-[5rem] md:text-[3.5rem] text-[3rem]" />
                        <p className="font-aldrich">React.js</p>
                    </div>
                    <div className="glass lg:w-[85%] md:w-[92%] w-[96%] lg:h-[11rem] md:h-[11rem] h-[9rem] lg:my-2 md:my-2 my-1 flex flex-col justify-center items-center gap-1 border-[1px] text-[#fcdc00] transition-transform duration-300 ease-in-out hover:scale-105">
                        <RiJavascriptFill className="lg:text-[5rem] md:text-[3.5rem] text-[3rem]" />
                        <p className="font-aldrich">JavaScript</p>
                    </div>
                    <div className="glass lg:w-[85%] md:w-[92%] w-[96%] lg:h-[11rem] md:h-[11rem] h-[9rem] lg:my-2 md:my-2 my-1 flex flex-col justify-center items-center gap-1 border-[1px] text-[#FFA611] transition-transform duration-300 ease-in-out hover:scale-105">
                        <RiFirebaseLine className="lg:text-[5rem] md:text-[3.5rem] text-[3rem]" />
                        <p className="font-aldrich">Firebase</p>
                    </div>
                    <div className="glass lg:w-[85%] md:w-[92%] w-[96%] lg:h-[11rem] md:h-[11rem] h-[9rem] lg:my-2 md:my-2 my-1 flex flex-col justify-center items-center gap-1 border-[1px] text-[#FF6739] transition-transform duration-300 ease-in-out hover:scale-105">
                        <TiHtml5 className="lg:text-[5rem] md:text-[3.5rem] text-[3rem]" />
                        <p className="font-aldrich">HTML</p>
                    </div>
                    <div className="glass lg:w-[85%] md:w-[92%] w-[96%] lg:h-[11rem] md:h-[11rem] h-[9rem] lg:my-2 md:my-2 my-1 flex flex-col justify-center items-center gap-1 border-[1px] text-sky-400 transition-transform duration-300 ease-in-out hover:scale-105">
                        <SiTailwindcss className="lg:text-[5rem] md:text-[3.5rem] text-[3rem]" />
                        <p className="font-aldrich">Tailwind CSS</p>
                    </div>
                    <div className="glass lg:w-[85%] md:w-[92%] w-[96%] lg:h-[11rem] md:h-[11rem] h-[9rem] lg:my-2 md:my-2 my-1 flex flex-col justify-center items-center gap-1 border-[1px] text-[#ef391a] transition-transform duration-300 ease-in-out hover:scale-105">
                        <FaGitAlt className="lg:text-[5rem] md:text-[3.5rem] text-[3rem]" />
                        <p className="font-aldrich">Git</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;