import cuidadoMóvil from '/assets/webp/cuidado-teléfono.webp';
import telefono from '/assets/webp/teléfono-mojado.webp';
import publicidad from '/assets/webp/publicidad-android.webp'

const BannerBlog = ()=>{
    return(
        <div className='md:grid grid-cols-2 grid-rows-2 lg:p-4 lg:gap-x-12 gap-x-4 content-evenly px-3 lg:px-5'>
            <div className='col-start-1 col-end-2 row-start-1 row-end-4  md:border-r-4 md:border-fuchsia-600 md:pr-3 lg:pr-8'>
            <h3 className='text-3xl font-bold my-4'>Nuestro blog</h3>
                <div>
                    <img 
                    className='w-[440px]'
                    src={ cuidadoMóvil }
                    alt='cuidado-móvil1'
                    loading='lazy'
                    />
                </div>
                <div>
                <h4 className='text-xl font-bold'>Cuidados básicos de tu teléfono móvil</h4>
                    <hr className='bg-purple-600 h-1 w-[170px]'/>
                    <p className='my-2'>Publicado por: <strong className='text-fuchsia-600'>Admin</strong></p>
                    <p>Que tu teléfono móvil se moje es mas común de lo que crees, accidentes como salpicaduras, caidas en albercas, tinas o hasta el inodoro es muy habitual en usuarios de teléfonos móviles. La primera recomendación que debes de tener en cuenta cuando se te moje tu teléfono es.....</p>
                </div>
            </div>
            <div className='col-start-2 col-end-3 row-start-1 row-end-2'>
                <div className='md:flex md:flex-col lg:flex-row gap-4 my-4 border-2 border-fuchsia-600 p-4 md:p-4 rounded-md'>
                    <img 
                    className='w-[50%] sm:w-44 lg:mx-auto mb-4 md:m-0' 
                    src={ telefono }
                    alt='cuidado-móvil2'
                    loading='lazy'
                    />
                    <div>
                        <h4 className='text-xl font-bold'>¿Se te mojó tu teléfono móvil?</h4>
                        <hr className='bg-purple-600 h-1 w-[170px]'/>
                        <p className='my-2'>Publicado por: <strong className='text-fuchsia-600'>Admin</strong></p>
                        <p className=''>Que tu teléfono móvil se moje es mas común de lo que crees, accidentes como salpicaduras, caidas en albercas, tinas o hasta el inodoro es muy habitual en usuarios de teléfonos móviles. La primera recomendación que debes de tener en cuenta cuando se te moje tu teléfono es.....</p>
                    </div>
                </div>
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3'>
                <div className='md:flex md:flex-col lg:flex-row  gap-4 my-4 border-2 border-fuchsia-600 p-4 md:p-4 rounded-md'>
                    <img
                    className='w-[50%] sm:w-44 lg:mx-auto mb-4 md:0' 
                    src={ publicidad }
                    alt='cuidado-móvil3'
                    loading='lazy'
                    />
                    <div>
                        <h4 className='text-xl font-bold'>¡Cuidado! Evita el spam y publicidad emergente</h4>
                        <hr className='bg-purple-600 h-1 w-[170px]'/>
                        <p className='my-2'>Publicado por: <strong className='text-fuchsia-600'>Admin</strong></p>
                        <p>Que tu teléfono móvil se moje es mas común de lo que crees, accidentes como salpicaduras, caidas en albercas, tinas o hasta el inodoro es muy habitual en usuarios de teléfonos móviles. La primera recomendación que debes de tener en cuenta cuando se te moje tu teléfono es.....</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BannerBlog;