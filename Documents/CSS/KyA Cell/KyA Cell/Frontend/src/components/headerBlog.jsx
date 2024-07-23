import { Link } from "react-router-dom";

const HeaderBlog = ()=>{
    return(
        <div className='w-full h-12 flex justify-end py-20 px-8'>
            <nav>
                <ul className='flex items-center gap-x-8'>
                    <Link className="font-bold text-xl">Registrate</Link>
                    <Link className="button-hover">Inicia Sesión</Link>
                </ul>
            </nav>
        </div>
    )
};

export default HeaderBlog; 