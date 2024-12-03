import { RiReactjsLine } from "react-icons/ri";
import {SiAngular , SiSpring, SiDotnet , SiMysql  } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
import { TbBrandReactNative } from "react-icons/tb";
import {  motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial : {y:-10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})


const Technologies = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y: -100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0 , x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial" 
        animate="animate"
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial" 
        animate="animate" 
        className="rounded-2xl border-4 dark:dark:border-neutral-800 border-neutral-300 border-neutral-300  p-4">
          <SiAngular className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial" 
        animate="animate" 
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <SiSpring className="text-7xl text-green-600" />
        </motion.div>
        {/* <motion.div
        variants={iconVariants(2)}
        initial="initial" 
        animate="animate" 
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <FiFigma className="text-7xl text-purple-500" />
        </motion.div> */}
        <motion.div 
        variants={iconVariants(2)}
        initial="initial" 
        animate="animate"
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <SiDotnet className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial" 
        animate="animate"
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <FcAndroidOs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial" 
        animate="animate"
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial" 
        animate="animate"
        className="rounded-2xl border-4 dark:border-neutral-800 border-neutral-300 p-4">
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
