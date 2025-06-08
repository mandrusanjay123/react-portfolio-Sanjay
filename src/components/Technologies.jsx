import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaBrain,
} from "react-icons/fa";

import {
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHuggingface,
  SiJupyter,
  SiNumpy,
  SiApachehadoop,
  SiApachespark,
} from "react-icons/si";

import { MdOutlineComputer } from "react-icons/md";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initail: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techStack = [
  { icon: <FaPython className="text-7xl text-blue-500" />, duration: 3 },
  { icon: <FaJsSquare className="text-7xl text-yellow-500" />, duration: 2 },
  { icon: <FaJava className="text-7xl text-red-600" />, duration: 4 },
  { icon: <FaGitAlt className="text-7xl text-orange-500" />, duration: 2.2 },
  { icon: <FaAws className="text-7xl text-orange-400" />, duration: 3.3 },
  { icon: <FaDocker className="text-7xl text-blue-400" />, duration: 4.1 },
  { icon: <SiReact className="text-7xl text-cyan-400" />, duration: 2.5 },
  { icon: <SiNodedotjs className="text-7xl text-green-500" />, duration: 6 },
  { icon: <SiExpress className="text-7xl text-gray-300" />, duration: 3.5 },
  { icon: <SiMongodb className="text-7xl text-green-700" />, duration: 3.7 },
  { icon: <SiPostgresql className="text-7xl text-blue-800" />, duration: 2.9 },
  { icon: <SiSpringboot className="text-7xl text-green-600" />, duration: 2.8 },
  { icon: <SiPytorch className="text-7xl text-red-600" />, duration: 3.5 },
  { icon: <SiTensorflow className="text-7xl text-orange-700" />, duration: 4.8 },
  { icon: <SiOpencv className="text-7xl text-blue-700" />, duration: 3.1 },
  { icon: <SiHuggingface className="text-7xl text-yellow-400" />, duration: 2.1 },
  { icon: <SiJupyter className="text-7xl text-orange-500" />, duration: 5.3 },
  { icon: <SiNumpy className="text-7xl text-green-500" />, duration: 4.4 },
  { icon: <SiApachehadoop className="text-7xl text-yellow-600" />, duration: 4.2 },
  { icon: <SiApachespark className="text-7xl text-orange-500" />, duration: 3.3 },
  { icon: <FaBrain className="text-7xl text-purple-500" />, duration: 2.4 },
  { icon: <MdOutlineComputer className="text-7xl text-blue-700" />, duration: 2.6 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initail"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
