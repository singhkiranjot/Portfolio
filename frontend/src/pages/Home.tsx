import { backInOut, motion } from "framer-motion"
import image from "../Utils/IMG_20241111_132520 (4).png"
import { Glow } from "../components/Glow"
import { Letter } from "../components/Letter"

export const Home = () => {
  
    return <div className="h-screen  w-screen bg-slate-200 px-4 flex flex-col -z-20 lg:px-10 lg:flex-row ">
        <div className="pt-28 lg:pl-5 z-10  w-4/5">
            <div className=" text-slate-800">
                <div className="flex  gap-10">
                <Letter letter="HI,"/>
                <Letter letter="I'M"/>
                </div>
            </div>
            <div className=" text-slate-800 ">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-7">
                <Letter letter="Kiranjot"/>
                <Letter letter="singh"/>
                </div>
            </div>
        </div>
        
        <motion.img
        initial={{
            x:250,
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1.5,
            ease:backInOut
        }}
        className="w-4/5 z-10 pt-5 mx-auto" src={image} alt="" />
        
        <div className="absolute top-[10%] left-[10%]">
            <Glow/>
        </div>
        <div className="absolute bottom-[5%] right-[30%]">
            <Glow/>
        </div>
    </div>
}