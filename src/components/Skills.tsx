import { DiReact } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseLine, RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const Skills = () => {
    return (
        <div id='skills' className="mx-20 h-[90vh]">
            <div className="text-5xl font-medium text-gradient2 ml-32">MY SKILLS</div>
            <div className="border-0 border-l border-gray-600 w-[65%] ml-52 mt-2 text-lg px-10 py-7 text-shadow">
                <div className="grid grid-cols-3">
                    <div className="glass w-[85%] h-[11rem] my-2 flex flex-col justify-center items-center gap-1 border-[2px] text-[#58c4dc] transition hover:scale-105">
                        <DiReact className="text-[5rem]" />
                        <p className="font-aldrich">React.js</p>
                    </div>
                    <div className="glass w-[85%] h-[11rem] my-2 flex flex-col justify-center items-center gap-1 border-[1px] text-[#fcdc00] transition hover:scale-105">
                        <RiJavascriptFill className="text-[5rem]" />
                        <p className="font-aldrich">JavaScript</p>
                    </div>
                    <div className="glass w-[85%] h-[11rem] my-2 flex flex-col justify-center items-center gap-1 border-[1px] text-[#FFA611] transition hover:scale-105">
                        <RiFirebaseLine className="text-[5rem]" />
                        <p className="font-aldrich">Firebase</p>
                    </div>
                    <div className="glass w-[85%] h-[11rem] my-2 flex flex-col justify-center items-center gap-1 border-[1px] text-[#FF6739] transition hover:scale-105">
                        <TiHtml5 className="text-[5rem]" />
                        <p className="font-aldrich">HTML</p>
                    </div>
                    <div className="glass w-[85%] h-[11rem] my-2 flex flex-col justify-center items-center gap-1 border-[2px] text-sky-400 transition hover:scale-105">
                        <SiTailwindcss className="text-[5rem]" />
                        <p className="font-aldrich">Tailwind CSS</p>
                    </div>
                    <div className="glass w-[85%] h-[11rem] my-2 flex flex-col justify-center items-center gap-1 border-[1px] text-[#ef391a] transition hover:scale-105">
                        <FaGitAlt className="text-[5rem]" />
                        <p className="font-aldrich">Git</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;