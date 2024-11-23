import {easeInOut, motion } from "framer-motion"
import { useEffect, useState } from "react"


export const AboutAnimation = ({ abouts }: {abouts : string[]} ) => {
    const letterDeley = 0.025
    const boxFadeDuration = 0.150
    const fadeDelay = 2
    const mainFadeDuration = 0.25
    const swapDelay = 1500

    const[aboutsIndex , setAboutsIndex] = useState(0)
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setAboutsIndex((pv) => (pv + 1) % abouts.length)
        },swapDelay)

        return () => clearInterval(intervalId)
    },[])

    return <div className=" lg:text-5xl text-4xl text-center font-semibold uppercase">
        {abouts[aboutsIndex].split("").map((l,i)=>{
            return <motion.span
            initial={{
                opacity:1
            }}
            animate={{
                opacity:0
            }}
            transition={{
                delay:fadeDelay,
                duration: mainFadeDuration,
                ease:easeInOut
            }}
            className="relative"
            key={`${aboutsIndex}-${i}`}>
                <motion.span
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay: i * letterDeley,
                    duration: boxFadeDuration
                }}
                >{l}</motion.span>
                <motion.span 
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:[0, 1, 0]
                }}
                transition={{
                    times:[0, 0.1, 1],
                    delay: i * letterDeley,
                    duration:boxFadeDuration,
                    ease:easeInOut
                }}
                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" />
            </motion.span>
        })}
    </div>
}