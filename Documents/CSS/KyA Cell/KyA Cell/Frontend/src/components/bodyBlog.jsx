import importarArch from '/assets/webp/transferir-archivos.webp';
import guardarArch from '/assets/webp/nube.webp';
import appTerceros  from '/assets/webp/apk-terceros.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLike ,AiOutlineDislike  } from 'react-icons/ai'

const BodyBlog = ()=>{

const [ count, setCount ] = useState(0);
const [ clicked, setClicked ] = useState(false);

const countClicks = ()=>{
    setCount(count + 1)
};

const likeOrDislike = ()=>{
    setClicked(!clicked)
}

const contadores = [1, 2, 3, 4, 5, 6];

    return(
        <div className='grid lg:grid-cols-3 py-4 px-8 md:px-24 lg:px-4 xl:px-24 w-full my-8 gap-y-8 gap-x-6 h-auto'>
            <div className='rounded-xl bg-gradient-to-b from-transparent to-gray-300 w-full p-2'>
                    <div className='relative overflow-hidden rounded-xl max-h-[197px] sm:max-h-[293px] md:max-h-[210px] lg:max-h-[210px] xl:max-h-[300px]'>
                        <img 
                            className='w-[440px] rounded-xl mx-auto object-cover transition-transform duration-500 transform hover:scale-50 bg-cover bg-center'
                            src={ importarArch }
                            alt='importar-archivos'
                            loading='lazy'
                        />
                        <Link onClick={ countClicks }>
                            <div className='absolute flex items-center justify-center inset-0 bg-black bg-opacity-75 text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-2xl font-bold text-center'>¿Cómo transferir la información de un teléfono antiguo a un teléfono nuevo?</p>
                            </div>
                        </Link>     
                    </div> 
                <div className='flex flex-1 items-center justify-between px-2 w-full'>
                        <p className='text-xl py-4'>Número de visitas  <span className='font-extrabold'>{count}</span></p>
                        <div className='flex gap-x-6 items-center justify-end flex-grow'>
                            <Link onClick={ likeOrDislike }
                            className={`text-xl ${clicked ? 'button-active' : ''}`}>
                                <AiOutlineLike />
                            </Link>
                            <Link 
                            onClick={ likeOrDislike }
                            className={`text-xl ${clicked ? 'button-active' : ''}`}>
                                <AiOutlineDislike />
                            </Link>
                        </div>
                </div>
            </div>
            <div className='rounded-xl bg-gradient-to-b from-transparent to-gray-300 w-full p-2'>
                <div className='relative overflow-hidden rounded-xl max-h-[197px] sm:max-h-[293px] md:max-h-[210px] lg:max-h-[210px] xl:max-h-[300px]'>
                        <img 
                            className='w-[440px] rounded-xl mx-auto object-cover transition-transform duration-500 transform hover:scale-50 bg-cover bg-center'
                            src={ guardarArch }
                            alt='guardar-archivos'
                            loading='lazy'
                        />
                    <Link onClick={ countClicks }>
                        <div className='absolute flex items-center justify-center inset-0 bg-black bg-opacity-75 text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-2xl font-bold text-center'>¿Cómo respaldar tu información?</p>
                        </div>
                    </Link>   
                </div>
                <div className='flex flex-1 items-center justify-between px-2 w-full'>
                        <p className='text-xl py-4'>Número de visitas  <span className='font-extrabold'>{count}</span></p>
                        <div className='flex gap-x-8 items-center'>
                            <Link onClick={ likeOrDislike }
                            className={`text-xl ${clicked ? 'button-active' : ''}`}>
                                <AiOutlineLike />
                            </Link>
                            <Link 
                            onClick={ likeOrDislike }
                            className={`text-xl ${clicked ? 'button-active' : ''}`}>
                                <AiOutlineDislike />
                            </Link>
                        </div>
                </div>
            </div>
            <div className='relative overflow-hidden rounded-xl bg-gradient-to-b from-transparent to-gray-300 w-full p-2'>
                <div className='relative overflow-hidden rounded-xl max-h-[197px] sm:max-h-[293px] md:max-h-[250px] lg:max-h-[210px] xl:max-h-[300px]'>
                    <img 
                        className='w-[440px] h-auto rounded-xl mx-auto'
                        src={ appTerceros }
                        alt='app-terceros'
                        loading='lazy'
                    />
                    <Link onClick={ countClicks }>
                        <div className='absolute flex items-center justify-center inset-0 bg-black bg-opacity-75 text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-500'>
                        <p className='text-2xl font-bold text-center'>¿Es recomendable instalar apks de terceros? Posibles riesgos de instalar apks de terceros</p>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-1 items-center justify-between px-2 w-full'>
                        <p className='text-xl py-4'>Número de visitas  <span className='font-extrabold'>{count}</span></p>
                        <div className='flex gap-x-8 items-center'>
                            <Link onClick={ likeOrDislike }
                            className={`text-xl ${clicked ? 'button-active' : ''}`}>
                                <AiOutlineLike />
                            </Link>
                            <Link 
                            onClick={ likeOrDislike }
                            className={`text-xl ${clicked ? 'button-active' : ''}`}>
                                <AiOutlineDislike />
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default BodyBlog; 