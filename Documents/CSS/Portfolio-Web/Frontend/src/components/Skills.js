// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// icons

import getSkills from "../services/data/getSkills";
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation();
  const skills = getSkills();
  
  return (
    <section className="section my-44" id="skills">
      <div className="container mx-auto mt-20">
        <div>
          <motion.h2 
            variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          transition={{ duration: 0.6 }}
          viewport={{once: false, amount: 0.3}}
            className="h2 leading-tight text-accent font-bold mb-6"
          >
            {t("skills")}
          </motion.h2>
          {/* Categorías */}
          <div className="space-y-12">
            {skills.map((group, index) => (
              <motion.div 
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gradient mb-6">{group.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {group.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex flex-col items-center justify-center bg-white/5 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
                    >
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
