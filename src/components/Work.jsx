import { myworks } from "./worksdata";

const Work = () => {

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold text-cyan-400">Projects</p>
        <p className="text-gray-400 ">Check out some of my recent projects</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">

       {myworks.map((item)=>{
        return(
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" key={item.id}>
          <img src={item.image} alt="" className="object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wide">{item.projTitle}</span>
            <div className="pt-8 text-center">
              <a href="/">
                {/* <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" onClick={item}>
                  Live
                </button> */}
                <a href={item.livelink} className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</a>
              </a>
            </div>
          </div>
        </div>
        )
       })}
       
        {/* <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj2} alt="" className="object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wide">Project 2</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj3} alt="" className="object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wide">Project 3</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj4} alt="" className="object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wide">Project 4</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj5} alt="" className="object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wide">Project 5</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj6} alt="" className="object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wide">Project 6</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
