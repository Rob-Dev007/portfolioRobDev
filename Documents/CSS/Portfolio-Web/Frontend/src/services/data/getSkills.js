import { t } from "i18next";

import { 
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoHtml5, 
  BiLogoCss3, 
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoMongodb,
  BiLogoGithub
} from "react-icons/bi"; 

import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";

import { SiPrisma, SiPostman } from "react-icons/si"; 

const getSkills = () => [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <BiLogoHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <BiLogoCss3 className="text-blue-600" /> },
      { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
      { name: "React", icon: <BiLogoReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="text-black-400" /> },
      { name: "TailwindCSS", icon: <BiLogoTailwindCss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <BiLogoBootstrap className="text-purple-600" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <BiLogoNodejs className="text-green-600" /> },
      { name: "Express", icon: <BiLogoNodejs className="text-green-600" /> },
      { name: "PHP", icon: <BiLogoPhp className="text-indigo-600" /> },
    ],
  },
  {
    category: t("category"),
    skills: [
      { name: "MySQL", icon: <TbBrandMysql className="text-indigo-600" /> },
      { name: "MongoDB", icon: <BiLogoMongodb className="text-green-600" /> },
      { name: "Prisma", icon: <SiPrisma className="text-gray-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Git", icon: <BiLogoGithub className="text-black" /> },
      { name: "GitHub", icon: <BiLogoGithub className="text-gray-800" /> },
    ],
  },
];



export default getSkills; 