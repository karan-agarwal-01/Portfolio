import { BiArrowBack } from "react-icons/bi";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router";

const Resume = () => {

    const fileurl: string = "https://drive.google.com/uc?export=download&id=19ul37aKTc85OIhCvOQEsgbCz6vS8BkEA";

    return (
        <div className="lg:top-0 md:top-0 lg:px-4 md:px-2 px-1 lg:mx-[4%] lg:my-[1%] md:mx-[3%] md:my-[3%] mx-[2%] my-[2%] h-[180vh]" data-aos="fade-up">
            <div className='lg:text-4xl md:text-3xl text-2xl font-semibold font-[cambria] text-violet-400 text-center my-5 font-aldrich'>Checkout my Resume</div>
            <div className="lg:h-[59rem] md:h-[52rem] h-[54rem] lg:w-[40rem] md:w-[38rem] w-[23rem] bg-white mx-auto border-2 border-violet-800 font-[cambria]">
                <div className="flex items-center justify-between">
                    <Link to='/'>
                        <div className="text-xl ml-5">
                            <BiArrowBack />
                        </div>
                    </Link>
                    <div className="text-center font-medium lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] mt-2">Karan Agarwal</div>
                    <a href={fileurl} className="text-lg text-violet-600 border-2 rounded-full p-1 mr-5 hover:bg-violet-600 hover:text-white hover:border-black">
                        <GoDownload />
                    </a>
                </div>
                <div className="text-center lg:text-[.6rem] md:text-[.6rem] text-[.55rem] text-gray-500 lg:mb-10 md:mb-7 mb-5">GitHub ID– karan-agarwal-01 | karanagarwal858@gmail.com | +918979218355</div>
                <hr className="w-[98%] mx-auto text-violet-400" />
                <div className="flex w-[100%] my-2">
                    <div className="w-[40%] lg:ml-8 md:ml-5 ml-3">
                        <div className="text-gray-500 lg:text-[.9rem] md:text-[.8rem] text-[.75rem] mb-2">EDUCATION</div>
                        <div className="my-1">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium">IFTM UNIVERSITY</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700">MASTER OF COMPUTER APPLICATION</div>
                            <div className="lg:text-[.6rem] md:text-[.5rem] text-[.45rem] text-gray-500">2023-2025 | Moradabad, U.P (Ongoing)</div>
                        </div>
                        <div className="mt-1 mb-2">
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700">BACHELOR'S IN COMPUTER APPLICATION</div>
                            <div className="lg:text-[.6rem] md:text-[.5rem] text-[.45rem] text-gray-500">2020-2023 | Moradabad, U.P CGPA : 9.06</div>
                        </div>
                        <div className="mt-1 mb-2">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium">G.G HINDU INTER COLLEGE</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700">INTERMEDiATE ( U.P BORAD )</div>
                            <div className="lg:text-[.6rem] md:text-[.5rem] text-[.45rem] text-gray-500">2019 | Moradabad </div>
                            <div className="lg:text-[.6rem] md:text-[.5rem] text-[.45rem] text-gray-500">Percentage : 69.5 </div>
                        </div>
                        <div className="mt-1 mb-2">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium">HINDU MODEL INTER COLLEGE</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700">HIGH SCHOOL ( U.P BORAD )</div>
                            <div className="lg:text-[.6rem] md:text-[.5rem] text-[.45rem] text-gray-500">2017 | Moradabad </div>
                            <div className="lg:text-[.6rem] md:text-[.5rem] text-[.45rem] text-gray-500">Percentage : 82.3 </div>
                        </div>
                        <div className="text-gray-500 lg:text-[.9rem] md:text-[.8rem] text-[.75rem] lg:my-4 md:my-3 my-2">SKILLS</div>
                        <div className="my-1">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">PROGRAMMING</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                            • ReactJS <br/>
                            • Tailwind CSS <br/>
                            • Firebase <br/>
                            • JavaScript <br/>
                            • HTML <br/>
                            • CSS <br/>
                            • Next JS (learning) <br/>
                            • git
                            </div>
                        </div>
                        <div className="lg:mt-3 md:mt-2.5 mt-2 mb-1">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">SOFT SKILLS</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                Self-Motivated • Communication • Problem Solving • Management Skill • Creative <br/> • Team Lead.
                            </div>
                        </div>
                        <div className="lg:mt-3 md:mt-2.5 mt-2 mb-1">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">LANGUAGE</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                Hindi • English
                            </div>
                        </div>
                        <div className="text-gray-500 lg:text-[.9rem] md:text-[.8rem] text-[.75rem] lg:my-4 md:my-3 my-2">EXTRACURRICULAR ACTIVITIES</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                • Microsoft Office <br/>
                                • Video Editing <br/>
                                • Influencing on Instagram
                            </div>
                    </div>
                    <div className="w-[60%] lg:mr-4 md:mr-3 mr-2">
                        <div className="text-gray-500 lg:text-[.9rem] md:text-[.8rem] text-[.75rem]">OBJECTIVE</div>
                        <div className="my-1">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">Statement</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700">Seeking for a job opportunity of Front-end developer or ReactJS developer where I can utilize my coding skills, enhance my knowledge of design principles and grow with the organization.
                            </div>
                        </div>
                        <div className="text-gray-500 lg:text-[.9rem] md:text-[.8rem] text-[.75rem] lg:my-4 md:my-3 my-2">PROJECTS & INTERNSHIP</div>
                        <div className="my-1">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">INTERNSHIP – React JS intern (OCT 2024 - JAN 2025)</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                            I have completed 4 months internship as a React JS Intern from The Entrepreneurship Network, remote where I work on several projects which are helpful to utilize my skills and get a chance to make career growth. The list of the project I worked given below :
                            </div>
                            <div className="lg:mt-3 md:mt-2.5 mt-2 mb-1">
                                <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">TEN ALL ENGINE</div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                TEN ALL Engine is a web application that generate pdf and provide tips and tricks on different domain like health, finance, startup etc. based on responses and utilizing Generative AI Integration.
                                </div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-500 ml-0.5 my-1">Tech used:</div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                React JS • Tailwind CSS •Gemini AI • Authentication • Node JS for backend •JavaScript •CSS •HTML
                                </div>
                            </div>
                            <div className="lg:mt-3 md:mt-2.5 mt-2 mb-1">
                                <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">TEN HEALTH ENGINE</div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                TEN health Engine is an ai based web application that generate pdf about health related advices through Gemini AI.
                                </div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-500 ml-0.5 my-1">Tech used:</div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                React JS • Tailwind CSS •Gemini AI • Authentication • Node JS for backend •JavaScript •CSS •HTML
                                </div>
                            </div>
                            <div className="lg:mt-3 md:mt-2.5 mt-2 mb-1">
                                <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">TEN FASHION (Clothing website)</div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                TEN fashion is an e-commerce clothing website which allows users to browse categorized clothes for men, women and kids. It have the functionality of authentication, admin panel, shopping cart, order form etc.
                                </div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-500 ml-0.5 my-1">Tech used:</div>
                                <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                                React JS • Tailwind CSS • Authentication • Node JS for backend • MongoD •JavaScript •CSS •HTML •git
                                </div>
                            </div>
                        </div>
                        <div className="lg:my-5 md:my-4 my-3">
                            <div className="lg:text-[.8rem] md:text-[.7rem] text-[.65rem] font-medium mb-1">MY PROJECTS</div>
                            <div className="lg:text-[.7rem] md:text-[.6rem] text-[.55rem] text-gray-700 ml-0.5">
                            • MailGenius (AI Generated Email Sender for job purpose) – React JS, Node JS, Open AI. <br/>
                            • SocialSphere (social media application) – Next JS, JWT, Python <br/>
                            • Note Taking Application – React JS, Firebase <br/>
                            • Tic tac toe game – React JS, javascript, CSS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;