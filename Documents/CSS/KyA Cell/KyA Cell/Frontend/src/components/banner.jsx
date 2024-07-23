import TypingEffect from './TipyngEffect';
import imgBanner from '/assets/webp/img-banner.webp'

const Banner = ()=>{
    return(
            <div className="grid lg:grid-cols-2 min-h-screen w-full content-center justify-center p-4 mb-8 lg:px-8 lg:py-24 xl:px-44 lg:py-12">
                <div className="md:flex flex-col md:px-4 mt-20">
                    <h1 className="md:text-8xl text-4xl text-center mx-auto lg:mx-0 md:text-start font-extrabold text-3xl md:text-4xl lg:text-6xl text-blue-400"><span className='text-purple-600 md:text-[120px] text-[62px] lg:text-[170px]'>K</span>&<span className='text-fuchsia-600 md:text-[120px] text-[62px] lg:text-[170px]'>A </span>Cell</h1>
                    <h2 className="my-8 md:text-3xl text-xl mx-auto">Tienda de accesorios para teléfonos móviles y computadoras <br /><strong>te ofrece....</strong>
                    </h2>
                    <div className='h-24 text-2xl lg:text-5xl font-black'>
                        <TypingEffect />
                    </div>
                </div>
                <img 
                    className='lg:w-[440px] w-[260px] object-contain rounded-tl-[170px] rounded-tr-xl rounded-bl-xl rounded-br-[120px] mx-auto'
                    src={ imgBanner } 
                    alt='KyA-Cell'
                    loading='lazy'
                />
            </div>
    )
};

export default Banner;