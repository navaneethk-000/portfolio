import heroimage from "../assets/profilepic.jpg";
import { TypeAnimation } from "react-type-animation";
import resume from '../assets/resume.pdf'
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="my-auto mx-auto w-[300px] h-auto lg:w-[350px] border border-cyan-400 rounded-2xl">
        <img src={heroimage} alt="heroimage" className="rounded-2xl" />
      </div>
      <div className="col-span-2 px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-cyan-400">
                I'm a
            </span><br />
            <TypeAnimation
            sequence={[
                "Frontend Dev",
                1000,
                "Web Designer",
                1000,
                 
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">My name is Navaneeth, i am a frontend web developer</p>
        <div className="my-8">
            <a href={resume} className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br  from-bg-[#6439FF] to bg-[#00CCDD] text-gray-800 font-bold hover:text-white hover:" download='NAVANEETH_K WEB DEVELOPER'>
                Download CV
            </a>
            <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 border text-white">
                Contact
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
