import epi from "../img/epi.jpg"
import {ABOUT_TEXT} from "../data/data"
import {  motion } from "framer-motion"


const About = () => {
  return (
    <div 
    
    className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1.5}} 
      className="my-20 text-center text-4xl"> About 
      <motion.span
      whileInView={{opacity:1, x:0}} 
      initial={{opacity:0, x: -100}}
      transition={{duration: 3}} 
      className="text-neutral-500"> Me</motion.span>
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        <motion.div
        whileInView={{opacity:1, x:0}} 
        initial={{opacity:0, x: -100}}
        transition={{duration: 3}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex w-full">
            <img className="rounded-2xl  rounded-s-full rounded-r-3xl shadow-2xl bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500" src={epi} alt="" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}} 
        initial={{opacity:0, x: 100}}
        transition={{duration: 2.5}} 
        className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About
