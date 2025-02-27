import { Link } from 'react-scroll';
import mypic from '../assets/images/mypic.jpg'

const Home = () => {

    return (
        <>
        <div className="mx-20 pt-20" id='home'>
            <div className="w-[100%] flex items-center">
                <div className="w-[50%] h-[25rem]">
                    <div className="mx-20 my-12">
                        <img src={mypic} className="w-[380px] h-[380px] rounded-full object-cover img-border" />
                    </div>
                </div>
                <div className="w-[50%] mt-20">
                    <div className="text-7xl font-semibold text-gradient tracking-wider">FRONTEND<br />DEVELOPER</div>
                    <div className="text-violet-300 font-aldrich text-xl w-[90%] my-3.5 ml-1">Hi, I'm Karan Agarwal - frontend developer with a passion for creating websites.</div>
                    <Link to='portfolio' smooth={true} duration={500}>
                        <div className="text-sm font-medium border rounded-xl px-4 py-3 w-[25%] text-violet-400 cursor-pointer hover:text-violet-200 mt-2">
                            VIEW MY WORK
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;