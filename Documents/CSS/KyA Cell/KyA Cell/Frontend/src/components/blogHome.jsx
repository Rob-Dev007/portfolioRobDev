import publicidad from '/assets/webp/publicidad-android.webp';
import telefono from '/assets/webp/teléfono-mojado.webp';
import keyBlog from '/assets/webp/keyboard-blog.webp';
import { Link } from 'react-router-dom';

const BlogHome = ()=>{
    return(
        <div className='grid xl:grid-cols-2 lg:px-24'>
            <div className='p-3 md:py-8 md:px-12 my-4'>
                <h3 className='text-xl font-bold'>Nuestro blog</h3>
                <div className='sm:flex gap-5 my-4 border-2 border-fuchsia-600 p-4 md:p-4 rounded-md'>
                    <img 
                    className='w-[50%] sm:w-44 mx-auto my-4 md:m-0' 
                    src={ telefono }
                    alt='img-blog1'
                    loading='lazy'
                    />
                    <div>
                        <h4 className='text-xl font-bold'>¿Se te mojó tu teléfono móvil?</h4>
                        <hr className='bg-purple-600 h-1 w-[170px]'/>
                        <p className='my-2'>Publicado por: <strong className='text-fuchsia-600'>Admin</strong></p>
                        <p className=''>Que tu teléfono móvil se moje es mas común de lo que crees, accidentes como salpicaduras, caidas en albercas, tinas o hasta el inodoro es muy habitual en usuarios de teléfonos móviles. La primera recomendación que debes de tener en cuenta cuando se te moje tu teléfono es.....</p>
                    </div>
                </div>
                <div className='sm:flex gap-4 my-2 border-2 border-fuchsia-600 p-4 md:p-4 rounded-md'>
                    <img
                    className='w-[50%] sm:w-44 mx-auto my-4 md:0' 
                    src={ publicidad }
                    alt='img-blog2'
                    loading='lazy'
                    />
                    <div>
                        <h4 className='text-xl font-bold'>Cuidados básicos de tu teléfono móvil</h4>
                        <hr className='bg-purple-600 h-1 w-[170px]'/>
                        <p className='my-2'>Publicado por: <strong className='text-fuchsia-600'>Admin</strong></p>
                        <p>Que tu teléfono móvil se moje es mas común de lo que crees, accidentes como salpicaduras, caidas en albercas, tinas o hasta el inodoro es muy habitual en usuarios de teléfonos móviles. La primera recomendación que debes de tener en cuenta cuando se te moje tu teléfono es.....</p>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl border-4 border-fuchsia-600 p-4 outiline-2 m-3 mt-0 lg:m-24 relative overflow-hidden'>
                   <img 
                    className='bg-center bg-cover h-full rounded-2xl'
                    src={ keyBlog }
                    loading='lazy'
                    alt='key-blog'
                   />
                    <div className='absolute flex flex-col gap-12 items-center justify-center inset-0 bg-black bg-opacity-75 text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-500'>
                        <p className='text-2xl font-bold text-center'>¿Quieres saber más de tu teléfono móvil?</p>
                        <Link 
                        to='/blog'
                        className='button-contactar py-4'>
                            Visita el blog
                        </Link>
                    </div>
            </div>
        </div>
    )
};

export default BlogHome;