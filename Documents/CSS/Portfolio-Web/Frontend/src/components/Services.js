//variantes
import { fadeIn } from '../variants';
import MotionWrapper from '../utils/motionWrappers';
import Button from '../utils/button';
import getServices from '../services/data/getServices';
import { useTranslation } from 'react-i18next';


const Services = () => {

  const { t } = useTranslation();

  const services = getServices();

  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-4'>
        <MotionWrapper
          variants={fadeIn('right', 0.3)}
          viewport={{once: false, amount: 0.3}}
          className='img-services-mix-blend'
        >
          <h2 className='h2 text-accent mb-6 font-bold'>{t("function")}</h2>
          <h3 className='h3 max-w-[455px] mb-8'>{t("development")}</h3>
          <p className='text-xl font-bold'>{t("projectInMind")}</p>
          <Button to="#contact">
            {t('contact')}
          </Button>
        </MotionWrapper>
        <div className='flex-1'>
          <div>
            {services.map((service, index)=>{
              const {name, description, link} = service;
              return(
              <MotionWrapper
                variants={fadeIn('left', 0.8)}
                viewport={{once: false, amount: 0.8}}
                className='border-b flex border-white/20 h-auto mb-[30px] shadow-lg p-5 rounded-lg hover:shadow-2xl transition-shadow duration-300 group'
                key={index}
              >
                <div className='max-w-[530px]'>
                  <h4 className='font-primary tracking-wider text-[20px] font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <div href='#' className='w-9 h-9 mb-[42px] flex justify-center items-center'>
                    { service.icon }
                  </div>
                  <a href='#' className='text-gradient text-sm'>{link}</a>
                </div>
              </MotionWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  </section>;
};

export default Services;
