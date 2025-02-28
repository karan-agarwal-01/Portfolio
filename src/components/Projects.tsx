import { BiLink } from "react-icons/bi";
import img1 from './../assets/images/tenallengine.png'
import img2 from './../assets/images/tenhealthengine.png'
import img3 from './../assets/images/tenfashion.png'
import { Link } from "react-router";

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
        <div id="portfolio" className="lg:h-[132vh] md:h-[71vh] h-[120vh] w-[90vw] lg:mx-20 md:mx-16 mx-8">
            <div className="lg:text-5xl md:text-[2.5rem] text-4xl font-medium text-gradient2 lg:ml-32 md:ml-2 ml-0 lg:w-[27%] md:w-[32%] w-[56%]">PORTFOLIO</div>
            <div className="border-0 border-l border-gray-600 lg:w-[65%] md:w-[100%] w-[95%] lg:ml-52 md:ml-16 ml-4 mt-2 mb-8 font-aldrich lg:text-lg md:text-lg text-sm font-semibold text-violet-300 lg:px-10 md:px-6 px-3 lg:py-7 md:py-4 py-4 text-shadow">
                {
                    projects.map((project) => (
                        <div key={project.id} className="lg:flex md:flex items-center lg:gap-20 md:gap-10 gap-5 my-1 lg:w-[60vw] md:w-[75vw] w-[80vw] lg:p-5 md:p-3.5 p-2">
                            <div className="lg:w-[50%] md:w-[50%] w-[100%] flex flex-col gap-1">
                                <div className="lg:text-3xl md:text-2xl text-xl lg:text-left md:text-left text-center tracking-wider font-semibold text-gradient3">{project.project_name}</div>
                                <div className="lg:ml-1 md:ml-1 ml-0 lg:text-[.9rem] md:text-[.8rem] text-[.8rem] font-aldrich text-violet-200">{project.project_details}</div>
                                <a href={project.project_link} className="lg:flex md:flex hidden font-medium items-center gap-1 text-violet-400 hover:text-violet-500 cursor-pointer lg:text-[1rem] md:text-[1rem] text-[.9rem]">
                                    <BiLink />
                                    <p>Link of the project</p>
                                </a>
                            </div>
                            <div className="lg:w-[50%] md:w-[50%] w-[100%] lg:mx-0 md:mx-0 mx-[10%] mt-3">
                                <Link to={project.project_link}>
                                    <img className="lg:w-[30rem] md:w-[25rem] w-[15rem] rounded-xl hover:scale-105 transition" src={project.project_img} />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;