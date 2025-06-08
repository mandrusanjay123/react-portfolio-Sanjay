import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 flex flex-col items-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="w-full">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 w-full max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-12"
          >
            {/* Date */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full lg:w-1/4 text-sm text-neutral-400 mb-2 lg:mb-0"
            >
              <p>{experience.year}</p>
            </motion.div>

            {/* Role + Highlights + Tags */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <ul className="mb-4 list-disc list-inside text-neutral-400 space-y-1">
                {experience.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
