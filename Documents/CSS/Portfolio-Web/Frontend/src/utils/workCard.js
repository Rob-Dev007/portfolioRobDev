import Button from "../utils/button";

const WorkCard = ({ description, src, alt, title, icons=[] })=>{
    return(
         <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/50 w-full h-full absolute z-53 transition-all duration-300' ></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={src} alt={alt}/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{description}</span>
            </div>
            <div className='absolute -bottom-full left-8 group-hover:bottom-28 md:group-hover:bottom-32 transition-all duration-700 z-20'>
                <span className='text-white text-2xl md:text-3xl'>{title}</span>
            </div>
                    <div 
                    initial={{ y: 100, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -bottom-full group-hover:bottom-20 transition-all duration-500 z-50 flex gap-6 left-8">
                        {
                            icons.map((icon, index)=>(
                                <span key={index} className="text-2xl md:text-4xl text-white font-bold">{icon}</span>
                            ))
                        }
                    </div>
            <div
                initial={{ y: 100, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-full group-hover:bottom-4 transition-all duration-500 z-50 flex gap-6 left-6 lg:left-32"
            >
                <Button>Demo</Button>
                <Button>Código</Button>
            </div>
        </div>
    )
}

export default WorkCard;