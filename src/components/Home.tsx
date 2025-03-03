import { Link } from 'react-scroll';
import mypic from '../assets/images/mypic.jpg'


const Home = () => {

    return (
        <>
        <div className="h-auto lg:mx-20 md:mx-16 mx-8" id='home'>
            <div className="lg:w-[100%] md:w-[90%] flex flex-col md:flex-row lg:flex-row items-center lg:my-0 md:my-3 my-27" data-aos="fade-up">
                <div className="lg:w-[50%] md:w-[60%] w-[100%] lg:h-[25rem] md:h-[20rem] h-[10rem]">
                    <div className="flex justify-center lg:mx-20 md:mx-5 lg:my-12 md:my-14">
                        <img src={mypic} className="lg:w-[380px] md:w-[250px] w-[180px] lg:h-[380px] md:h-[250px] h-[180px] rounded-full object-cover img-border" />
                    </div>
                </div>
                <div className="lg:w-[50%] md:w-[40%] w-[100%] lg:mt-20 md:mt-12 mt-8">
                    <div className="lg:text-7xl md:text-[2.5rem] text-3xl lg:text-left md:text-left text-center font-semibold text-gradient tracking-wider">FRONTEND<br />DEVELOPER</div>
                    <div className="text-violet-300 font-aldrich lg:text-xl md:text-[0.9rem] text-lg lg:w-[90%] md:w-[100%] w-[100%] lg:text-left md:text-left text-center my-3.5 ml-1">Hi, I'm Karan Agarwal - frontend developer with a passion for creating websites.</div>
                    <div className='flex justify-center lg:justify-start md:justify-start'>
                        <Link to='portfolio' smooth={true} duration={500}>
                            <div className="text-sm font-medium border rounded-xl px-4 py-3 lg:text-left md:text-left text-center text-violet-400 cursor-pointer hover:text-violet-200 mt-2">
                                VIEW MY WORK
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;