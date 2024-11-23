import { backInOut } from "framer-motion/dom"
import { AboutAnimation } from "../components/AboutAnimation"
import { Heading } from "../components/Heading"
import {  motion } from "framer-motion"


export const About = () => {

 

    return <div className="h-screen  w-screen bg-slate-200 px-4 pt-5 flex flex-col items-center  lg:justify-end lg:px-10 lg:flex-row ">
        
        <div className="w-12/12 flex flex-col justify-center items-center gap-5 font-myfont text-slate-800 lg:gap-10 lg:w-5/12  mb-10">
            <div  >
                <Heading heading="I'M A..." />
            </div>
            <div >
                <AboutAnimation abouts={["student", "programmer", "web developer"]}  />
            </div>
        </div>
        <div className=" bg-slate-800 flex justify-center items-center lg:mr-4 lg:min-h-[50%] rounded-md lg:w-7/12 shadow-lg shadow-slate-800   ">
            <motion.div
            
            initial={{
                x:100,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            viewport={{
                once:true
            }}
            transition={{
                duration:1.5,
                ease:backInOut
            }}
            className=" rounded-3xl p-6 font-myfont font-semibold text-lg text-slate-200 lg:text-2xl  lg:p-10">
                Dedicated Computer Science student with a strong academic foundation and proficiency in Java, Python, and JavaScript. Currently pursuing a Bachelor’s degree at CGC Landran, specializing in Web Development. Hands-on experience in software design through internships and coursework projects. Quick learner with strong problem-solving skills and a collaborative mindset, eager to contribute to innovative software solutions.
            </motion.div>
        </div>
    
    </div>
}