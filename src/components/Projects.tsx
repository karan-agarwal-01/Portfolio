import { BiLink } from "react-icons/bi";
import img1 from './../assets/images/tenallengine.png'
import img2 from './../assets/images/tenhealthengine.png'
import img3 from './../assets/images/tenfashion.png'

const Projects = () => {

    const projects: { id: number; project_name: string; project_details: string; project_link: string; project_img:string }[] = [
        {
            id: 1,
            project_name: "TEN ALL ENGINE",
            project_details: "TEN ALL Engine is a web application that generate pdf and provide tips and tricks on different domain like health, finance, startup etc. based on responses and utilizing Generative AI Integration.",
            project_link: "https://edu-everything-engine.vercel.app/",
            project_img: img1,

        },
        {
            id: 2,
            project_name: "TEN HEALTH ENGINE",
            project_details: "TEN health Engine is an ai based web application that generate pdf about health related advices through Gemini AI.",
            project_link: "https://ten-health-engine-ten.vercel.app/",
            project_img: img2,

        },
        {
            id: 3,
            project_name: "TEN FASHION (Clothing website)",
            project_details: "TEN fashion is an e-commerce clothing website which allows users to browse categorized clothes for men, women and kids. It have the functionality of authentication, admin panel, shopping cart, order form etc.",
            project_link: "https://ten-fashion.vercel.app/",
            project_img: img3,

        },
    ]

    return (
        <div id="portfolio" className="mx-20 h-[140vh] w-[90vw]">
            <div className="text-5xl font-medium text-gradient2 ml-32">PORTFOLIO</div>
            <div className="border-0 border-l border-gray-600 w-[65%] ml-52 mt-2 text-lg  px-10 py-7 text-shadow">
                {
                    projects.map((project) => (
                        <div key={project.id} className="flex items-center gap-20 my-1 w-[60vw] p-5">
                            <div className="w-[50%] flex flex-col gap-1">
                                <div className="text-3xl tracking-wider font-semibold text-gradient3">{project.project_name}</div>
                                <div className="ml-1 text-[.9rem] font-aldrich text-violet-200">{project.project_details}</div>
                                <a href={project.project_link} className="flex font-medium items-center gap-1 text-violet-400 hover:text-violet-500 cursor-pointer text-[1rem]">
                                    <BiLink />
                                    <p>Link of the project</p>
                                </a>
                            </div>
                            <div className="w-[50%]">
                                <img className="w-[30rem] rounded-xl" src={project.project_img} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;