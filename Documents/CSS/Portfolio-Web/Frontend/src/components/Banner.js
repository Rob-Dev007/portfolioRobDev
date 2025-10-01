import imgBanner from '../assets/imgBanner.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';
import MotionWrapper from '../utils/motionWrappers';
import Button from '../utils/button';

const Banner = () => {

  const { t, i18n } = useTranslation();

  return(
    <section className='min-h-[85vh] lg:min-h-[75vh] flex items-center'  id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8 lg:flex-row'>
          <div className='flex-1 font-secondary text-center lg:text-left'> 
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[53px] font-bold leading-[0.8] lg:text-[80px] mt-4 lg:mt-0'>
                Roberto<span> Paredes</span>
            </motion.h1>
            <MotionWrapper
              variants={fadeIn('up', 0.9)}
              viewport={{once: false, amount: 0.7}}
              className='my-12 text-[26px] lg:text-[44px] font-secondary font-semibold leading-[1]'
            >
                <span className='mr-3 text-sky-600'>{t('presentation')}</span>
                <TypeAnimation 
                  key={i18n.language}
                  sequence={[
                    t("career"),
                    2100,
                    t("career2"),
                    2100
                  ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                  />
            </MotionWrapper>
            <MotionWrapper 
              variants={fadeIn('up', 0.9)}
              viewport={{once:false, amount:0.7}}
              className='flex gap-x-6 items-center max-w-max mb-12 mx-auto lg:mx-0'
            >
                <Button to="#contact">
                  {t('contact')}
                </Button>
                <a href='#' className='text-gradient text-link'>{t("projects")}</a>
            </MotionWrapper>
            <MotionWrapper
              variants={fadeIn('up', 0.9)}
              viewport={{once:false, amount:0.7}}
            >
              <p className='mb-8 max-w-lg mx-auto lg:mx-0'>{t("description")}</p>
            </MotionWrapper>
            <MotionWrapper
              variants={fadeIn('up', 0.9)}
              viewport={{once:false, amount:0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
                <a href='#' aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub/>
                </a>
                <a href='#' aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin/>
                </a>
            </MotionWrapper>
          </div>
              <MotionWrapper
                variants={fadeIn('down', 0.9)}
                viewport={{once: false, amount: 0.7}}
                className='hidden lg:block rounded-[30%] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.3)] border-[6px] border-gradient-to-tr from-indigo-500 to-fuchsia-50 '
              >
                <img className='max-w-[350px] object-cover' src={ imgBanner } alt='Imagen_RobertoParedes.jpg'/>
              </MotionWrapper>
        </div>
      </div>
    </section>
  )
};

export default Banner;
