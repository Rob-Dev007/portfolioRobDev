//variants
import { fadeIn } from '../variants';

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

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import MotionWrapper from '../utils/motionWrappers';
import WorkCard from '../utils/workCard';
import { useTranslation } from 'react-i18next';


const Work = () => {

  const { t } = useTranslation();

  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex gap-x-10 flex-col lg:flex-row'>
        <MotionWrapper
          variants={fadeIn('right', 0.3)}
          viewport={{once: false, amount: 0.3}}
          className=' flex flex-1 mb-10 flex-col gap-y-12 lg:mb-0'
        >
          <div>
            <h2 className='h2 leading-tight text-accent font-bold'>{t("currently")}</h2>
            <p className='max-w-sm text-2xl mb-16'>{t("work")}</p>
            <button className='btn btn-sm'>{t("myProjectsList")}</button>
          </div>
          <WorkCard src={Img1} alt={'Imagen_ProyectoK&AMarketEcommerce.jpg'} title={'K&A Market'} icons={[
              <BiLogoTypescript key="typescript" />,
              <TbBrandNextjs key="nextjs" />,
              <BiLogoTailwindCss key="tailwind" />, 
              <SiPrisma key="prisma" />,
              <BiLogoMongodb key="mongodb" />
            ]} 
          />
        </MotionWrapper>
        <MotionWrapper
          variants={fadeIn('left', 0.5)}
          viewport={{once: false, amount: 0.5}}
          className='flex flex-1 gap-y-8 flex-col'
        >
          <WorkCard src={Img1} alt={'Imagen_SmallLinkAcortadordeUrls.jpg'} title={'Small link - Acortador de Urls'} icons={[
              <BiLogoMongodb key="mongodb" />,
              <BiLogoNodejs key="expressjs" />,
              <BiLogoReact key="react" />,
              <BiLogoTailwindCss key="tailwind" />, 
              
          ]}/>
          <WorkCard src={Img2} alt={'Imagen_ProyectoShortUrl.jpg'} title={'Small link'}/>
        </MotionWrapper>
      </div>
    </div>
  </section>;
};

export default Work;
