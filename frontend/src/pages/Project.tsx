import { Heading } from "../components/Heading"
import { Projects } from "../components/Projects"
import githubIcon from "../assets/languages Icons/github.png"
import { easeInOut, motion } from "framer-motion"

export const Project = () => {
    return <div className="h-[125vh] lg:h-screen  w-screen bg-slate-900 gap-4 lg:gap-0 px-4 pt-4 lg:pt-6 flex flex-col items-center lg:px-10 ">
        <motion.div 
        initial={{
            opacity:0,
            y:50
        }}
        whileInView={{
            y:0,
            opacity:[0,0.25,0.50,0.75,1],
        }}
        viewport={{
            once:true
        }}
        transition={{
            duration:0.75,
            ease:easeInOut,
            times:[0,0.25,0.50,0.75,1]
        }}
        className="text-slate-200">
            <Heading heading="Projects"/>
        </motion.div>

        <div className="flex justify-center items-center mt-3 h-3/4 ">
            <div className=" grid grid:cols-1 lg:grid-cols-3 gap-4 lg:gap-6 rounded-lg w-[80%] lg:w-[65%] ">
                {Projects.map((proj)=>{
                    return <motion.a 
                        initial={{
                            scale:1
                        }}
                        whileHover={{
                            scale:0.95
                        }}
                        transition={{
                            ease:easeInOut
                        }}
                        href={proj.link} className="flex flex-col  items-center gap-1 p-2 lg:p-5 text-slate-200 rounded-lg border-2 shadow-md shadow-white" >
                        <div className="flex justify-center ">
                            <img src={proj.img} alt="project Image" className="w-full h-16 lg:h-40 rounded-lg" />
                        </div>
                        <span className=" text-lg lg:text-xl font-semibold font-myfont">{proj.title}</span>
                        <div className="text-sm lg:text-base font-medium font-myfont text-center w-full Lg:w-11/12">{proj.description}</div>  
                    </motion.a>
                })}
            </div>
        </div>

        <div className="flex justify-center pt-8 lg:pt-2">
            <a href="https://github.com/singhkiranjot">
            <button type="button" className=" flex justify-evenly items-center gap-3 lg:gap-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">More on Github 
                <img src={githubIcon} alt="" className="w-5 h-5" />
            </button>
            </a>
        </div>
    </div>
}