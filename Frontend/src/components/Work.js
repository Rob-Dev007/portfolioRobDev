//variants
import { fadeIn } from '../variants'; 
import MotionWrapper from '../utils/motionWrappers';
import WorkCard from '../utils/workCard';
import { useTranslation } from 'react-i18next';
import projects from '../services/data/getProjects';

const Work = () => {

  const { t } = useTranslation();

  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex gap-x-10 flex-col lg:flex-row'>
        <MotionWrapper
          variants={fadeIn('right', 0.3)}
          viewport={{once: false, amount: 0.3}}
          className=' flex flex-1 mb-10 flex-col gap-y-8 lg:mb-0'
        >
          <div>
            <h2 className='h2 leading-tight text-accent font-bold'>{t("currently")}</h2>
            <p className='sm:max-w-sm lg:max-w-lg text-2xl mb-4'>{t("work")}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map(project=>(
            <WorkCard 
              key={project.id}
              {...project}
            />
          ))} 
          </div>   
        </MotionWrapper>
      </div>
    </div>
  </section>;
};

export default Work;
