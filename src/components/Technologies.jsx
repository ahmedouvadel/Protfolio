import { RiReactjsLine } from "react-icons/ri";
import {SiAngular , SiSpring, SiDotnet , SiMysql  } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
import { FiFigma } from "react-icons/fi";
import { TbBrandReactNative } from "react-icons/tb";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpring className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FiFigma className="text-7xl text-purple-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDotnet className="text-7xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FcAndroidOs className="text-7xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
