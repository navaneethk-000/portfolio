import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
      <span className="text-cyan-400">
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/navaneethkofficial"><FaLinkedin/></a>
          <a href="https://www.instagram.com/n_a_v_a_n_e_t_h/profilecard/?igsh=Z3RzNjY3am1ib2cx"><BsInstagram/></a>
          <a href="https://github.com/navaneethk-000"><FaGithub/></a>
        </div>
      </span>
      <p className="text-gray-600">navaneethkofficials@gmail.com</p>
    </div>
  );
};

export default Footer;
