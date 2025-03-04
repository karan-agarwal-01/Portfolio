import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiMessageDots } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {

    type Inputs = {
        name: string,
        email: string,
        message: string,
        access_key: string,
    }

    const {register, handleSubmit, reset} = useForm<Inputs>();

    const onSubmitHandler: SubmitHandler<Inputs> = async (data, e) => {
        e?.preventDefault();
        const formData = new FormData(e?.target);
        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        });

        try {
            const response = await axios.post("https://api.web3forms.com/submit",formData)
            if (response.data.success) {
                toast.success("Form Submitted Successfully");
                reset();
            } else {
                console.error("Error", data)
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error)
            toast.error("Submission failed. Please try again.")
        }

    }

    return (
        <div id='contact' className="h-auto lg:mx-20 md:mx-16 mx-8">
            <div data-aos="fade-up">
            <div className="lg:text-5xl md:text-[2.5rem] text-4xl font-medium text-gradient2 lg:ml-32 md:ml-2 ml-0 lg:w-[27%] md:w-[39%] w-[68%]">CONTACT ME</div>
            <div className="border-0 border-l border-gray-600 lg:w-[65%] md:w-[85%] w-[95%] lg:ml-52 md:ml-16 ml-4 mt-2 mb-8 font-aldrich lg:text-lg md:text-lg text-sm font-semibold text-violet-300 lg:px-10 md:px-6 px-3 lg:py-7 md:py-4 py-4" data-aos="fade-right">
                <div className="lg:flex-row md:flex-row flex flex-col lg:w-[110%] md:w-[100%] w-[100%]">
                    <div className="flex flex-col gap-5 lg:w-[60%] md:w-[65%] w-[100%]">
                        <div className="text-gradient4 lg:text-2xl md:text-xl text-lg">
                            DO YOU HAVE A PROJECT TO DISCUSS ?
                        </div>
                        <div className="flex items-center gap-2 text-violet-50 lg:text-2xl md:text-xl text-lg">
                            <div>GET IN TOUCH</div>
                            <BiMessageDots />
                        </div>
                        <div>
                            <div className="lg:text-xl md:text-lg text-md text-violet-400">CONTACT</div>
                            <a href="mailto:karanagarwal858@gmail.com" className="text-sm font-aldrich text-blue-400 my-1 cursor-pointer hover:text-blue-200">karanagarwal858@gmail.com</a>
                        </div>
                        <div>
                            <div className="text-xl text-violet-400">SOCIAL MEDIA</div>
                            <div className="lg:text-[1.5rem] md:text-[1.4rem] text-[1.3rem] font-aldrich flex items-center gap-3 my-1">
                                <a href="https://www.instagram.com/karan_agarwal_122?igsh=MXJ5bndiNXM5aHh0ZA==">
                                    <FiInstagram className="text-violet-200 hover:text-rose-400" />
                                </a>
                                <a href="https://www.linkedin.com/in/karan-agarwal-b0a9401b0/">
                                    <CiLinkedin className="text-violet-200 hover:text-rose-400" />
                                </a>
                                <a href="https://github.com/karan-agarwal-01">
                                    <IoLogoGithub className="text-violet-200 hover:text-rose-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[40%] md:w-[35%] w-full">
                        <h1 className="text-white lg:text-2xl md:text-xl text-lg lg:mt-0 md:mt-0 mt-10 lg:text-left md:text-left text-center">CONTACT FORM</h1>
                        <form className="my-6" onSubmit={handleSubmit(onSubmitHandler)}>
                            <input type="hidden" id="access_key" {...register("access_key")} value={import.meta.env.VITE_ACCESS_KEY} />
                            <div className="flex flex-col gap-2 mb-3">
                                <label className="lg:text-lg md:text-md text-sm text-white font-aldrich">Name</label>
                                <input type="text" id='name' {...register("name")} className="border rounded-2xl border-gray-500 py-2  w-full lg:w-[22rem] md:w-[14rem] focus:outline-0 px-4 text-[1rem] text-gray-300" required />
                            </div>
                            <div className="flex flex-col gap-2 mb-3">
                                <label className="lg:text-lg md:text-md text-sm text-white font-aldrich">Email</label>
                                <input type="email" id='email' {...register("email")} className="border rounded-2xl border-gray-500 py-2 w-full lg:w-[22rem] md:w-[14rem] focus:outline-0 px-4 text-[1rem] text-gray-300" required />
                            </div>
                            <div className="flex flex-col gap-2 mb-3">
                                <label className="lg:text-lg md:text-md text-sm text-white font-aldrich">Message</label>
                                <textarea rows={4} id='message' {...register("message")} className="border rounded-2xl border-gray-500 py-2 w-full lg:w-[22rem] md:w-[14rem] focus:outline-0 px-4 text-[1rem] text-gray-300" required>
                                </textarea>
                            </div>
                            <button type="submit" className="text-sm font-medium border rounded-xl py-2.5 px-5 text-violet-400 cursor-pointer hover:text-violet-200 mt-2 ml-1">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
          <ToastContainer />
        </div>
    );
}

export default Contact;