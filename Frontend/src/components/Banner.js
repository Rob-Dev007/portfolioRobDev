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
              className='my-12 text-[26px] md:text-[40px] xl:text-[48px] font-secondary font-semibold leading-[1]'
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
                  Contactame
                </Button>
                <a href='#work' className='text-gradient text-link'>{t("projects")}</a>
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
                <a className='hover:text-gray-500' href='https://github.com/Rob-Dev007' aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub/>
                </a>
                <a className='hover:text-gray-500' href='https://www.linkedin.com/in/robdev007/' aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin/>
                </a>
            </MotionWrapper>
          </div>
              <MotionWrapper
                  variants={fadeIn('down', 0.9)}
                  viewport={{ once: false, amount: 0.7 }}
                  className="relative hidden lg:block group"
                >
                  <div className="
                    absolute rounded-full inset-5 blur-2xl opacity-60
                    bg-gradient-to-tr from-indigo-500 via-sky-500 to-fuchsia-500
                    dark:opacity-80
                    transition duration-500 group-hover:scale-110
                  "></div>

                  <div className="
                    relative rounded-full overflow-hidden
                    border-4 border-white/30 dark:border-white/10
                    shadow-xl
                    transition duration-500 group-hover:-translate-y-2
                  ">
                    <div className="w-[350px] h-[350px] rounded-full overflow-hidden relative">
                      <img
                        src={imgBanner}
                        alt="Imagen_RobertoParedes.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
              </MotionWrapper>
        </div>
      </div>
    </section>
  )
};

export default Banner;
