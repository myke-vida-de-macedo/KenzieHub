import { motion } from "framer-motion"
import { ReactNode } from "react"

interface IPropsMotion {
    children:ReactNode
}

export default function TransitionPage( { children }:IPropsMotion ){

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{delay:0.5}}
        >
            { children }
        </motion.div>
    )
}