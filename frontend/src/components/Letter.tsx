import { easeInOut, motion } from "framer-motion"


export const Letter = ({letter}:{letter:string}) => {
    return <motion.div 
        initial="initial"
        animate="animate"
        
        className=" text-6xl font-semibold tracking-tighter leading-none lg:text-9xl whitespace-nowrap lg:overflow-hidden relative block uppercase  ">
            <div>
                {letter.split("").map((l,i)=>{
                    return <motion.span
                    variants={{
                        initial:{
                            y:"100%",
                            opacity:0
                        },
                        animate:{
                            y:0,
                            opacity:1
                        }
                    }}
                    transition={{
                        duration : 0.75,
                        ease:easeInOut,
                        delay : 0.025 * i
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}
            </div>
    </motion.div>
}