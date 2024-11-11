import aboutImg from '../assets/about.jpg'


const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
       <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex py-6 md:py-0">
            <div className="my-auto  mx-6">

                <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
                <p className="text-base lg:text-lg">
                Dedicated B.Tech ECE student with a strong passion for software development. Eager to apply my technical skills and problem-solving abilities to innovative projects in the IT industry. Proficient in HTML5 CSS3 JAVASCRIPT AND REACT, with a keen interest in Web development. I'm committed to continuous learning and staying up-to-date with the latest technologies.
                </p>

            </div>

        </div>
        <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={300} height={300} alt="" />
       </div>
    </div>
  )
}

export default About
