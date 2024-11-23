import { easeInOut, motion } from "framer-motion"

export const Glow = () => {
    return <motion.div
    initial={{
        scale:0
    }}
    animate={{
        scale:1
    }}
    transition={{
        duration:1,
        ease:easeInOut
    }}
    className={`bg-[#356ac0] w-80 h-80 rounded-full blur-xl -z-10 `}>

    </motion.div>
}