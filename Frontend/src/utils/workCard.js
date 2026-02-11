import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import getIcons from "../services/data/getIcons";

const WorkCard = ({ description, src, alt, title, icons=[], hrefWeb, hrefGit })=>{
    return(
         <div className="flex gap-3 flex-col">
         <div className='group relative overflow-hidden rounded-xl'>
            <div className='group-hover:bg-black/50 max-h-44 max-w-44 absolute z-50 transition-all duration-300'></div>
            {/** Images */}
            <img className='group-hover:scale-125 transition-all duration-500 object-cover'
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async" />
            {/** Icons */}
            <div
                className="absolute -bottom-full group-hover:bottom-20 transition-all duration-500 z-50 flex gap-6 left-0 lg:left-8">
                {icons.map((name) =>{ 
                    const IconComponent = getIcons[name];
                    if(!IconComponent) return null;
                    
                    return(
                    <span key={name} className="text-white text-md md:text-xl lg:text-3xl font-bold bg-black/80 px-4 py-2 rounded-lg" aria-label={`Tecnología ${name}`}>
                        <IconComponent />
                    </span>
                    )
                })}
            </div>
            <div
                className="absolute -bottom-full group-hover:bottom-4 transition-all duration-500 z-50 flex gap-6 left-3 lg:left-60"
            >
                <a 
                    className="font-bold text-cyan-400 text-2xl md:text-4xl hover:text-cyan-600 transform transition-all ease-out duration-500 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver demo del proyecto"
                    href= {hrefWeb}
                >
                    <BsArrowUpRightSquareFill />
                </a>
                <a 
                    className="font-bold text-cyan-400 text-2xl md:text-4xl hover:text-cyan-600 transform transition-all ease-out duration-500 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver código en GitHub"
                    href={hrefGit}
                >
                    <FaGithubSquare />
                </a>
            </div>
        </div>
            <div>
                <h3 className='text-2xl text-gradient'>{title}</h3>
                <h4 className='text-secondary lg:text-xl'>{description}</h4>
            </div>
        </div>
    )
}

export default WorkCard;