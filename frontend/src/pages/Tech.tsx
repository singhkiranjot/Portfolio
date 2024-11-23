import { easeInOut, motion, useInView } from "framer-motion"
import Languages from "../components/Languages"
import { Heading } from "../components/Heading"
import { useRef } from "react"

export const Tech = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    return <div className="  h-screen w-screen bg-slate-900 px-4 flex lg:flex-row-reverse flex-col  lg:justify-between items-center text-slate-200  lg:px-10">
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
        className="flex justify-center w-full lg:w-5/12 mt-16 mb-12"
        >
            <Heading heading="Tech Stack" />
        </motion.div>
        <div className="grid grid-cols-3 gap-4 rounded-lg shadow-xl shadow-slate-200 border-4 border-slate-200 overflow-hidden p-3 cursor-default lg:gap-5 lg:p-7 lg:grid-cols-5">
            {Languages.map((data)=>{
                return <>
                <motion.div
                
                ref={ref}
                
                initial={{
                    y:50,
                    opacity:0
                }}
                animate={
                    isInView ? {
                        y: 0,
                        opacity: 1,
                      }: {} }
                transition={{
                    duration : .75,
                    ease:easeInOut,
                    delay : 0.085 * (data.id),
                    
                }}
                className="flex flex-col items-center gap-2 ">
                    <img src={data.img} alt="" className="w-9 h-9 lg:w-14 lg:h-16 bg-slate-300 p-0.5 rounded-lg"/>
                    <div className="text-xs lg:text-lg text-white font-medium lg:font-bold font-myfont">{data.data}</div>
                </motion.div>
                </>
            })}
        </div>

    </div>
}