import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';
import MotionWrapper from '../utils/motionWrappers';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ModalCV from './CvModal';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const { t } = useTranslation();
  const [ open, setOpen ] = useState(false);

  const openModal = ()=> setOpen(true);
  const closeModal = ()=> setOpen(false);

  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto mt-12'>
      <div className='flex gap-y-12 flex-col lg:flex-row lg:items-center lg:gap-x-21 lg:gap-y-0 min-h-screen
      '>
        <MotionWrapper  
          variants={ fadeIn('right', 0.3) }
          viewport={ {once:false, amount:0.3} }
          className= 'img-about-mix-blend'>
        </MotionWrapper>
        <MotionWrapper
          variants={fadeIn('left', 0.5)}
          viewport={{once:false, amount:0.5}}
          className='flex-1'
        >
          <h2 className='h2 text-accent font-bold'>{t("about")}</h2>
          <p className='font-secondary lg:text-xl leading-tight mb-4'>{t("aboutDescription")}</p>
          <div className='flex gap-12 lg:gap-21 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
              {inView ? <CountUp start={0} end={2} duration={3}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                {t("years")}
              </div>
            </div>
          </div>
          <div className='flex gap-x-12 items-center'>
                <button 
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-medium shadow-lg hover:scale-105 transition"
                    onClick={openModal}>{t("cv")}</button>
                <a href='#work' className='text-gradient btn-link'>{t("projects")}</a>
          </div>
        </MotionWrapper>
      </div>
      <ModalCV 
        isOpen={open}
        onClose={closeModal}
      />
    </div> 
    </section>;
};

export default About;
