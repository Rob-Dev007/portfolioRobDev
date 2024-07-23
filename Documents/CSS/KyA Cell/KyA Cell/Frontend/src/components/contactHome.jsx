import Contactanos from "/assets/webp/Contact-Us.webp";
import { LuMapPin } from "react-icons/lu";
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contactos = ()=>{

    return(
       <div>
        <div className="grid lg:grid-cols-2 content-center place-items-center my-20 mx-4 lg:mx-8 xl:mx-44">
            <div>
                <div className="my-3 flex items-center md:justify-start justify-center">
                    < LuMapPin className="text-6xl text-fuchsia-600"/>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold text-center md:text-start my-2">Ubicanos</h3>
                    <p className="md:text-xl text-lg my-2 mr-4"><strong>Dirección: </strong>Av.Gran Colombia y Guaranda, sector mercado Mayorista, frente a la Coopmego</p>
                    <strong className="md:text-xl text-lg">Loja-Ecuador</strong>
                    <Link className="button-hover" to={'/contactanos'}>Contáctanos</Link>
                    <div className="flex gap-4 ">
                        <Link>
                            <FaFacebook className="text-3xl text-fuchsia-600 hover:text-purple-600" />
                        </Link>
                        <Link>
                            <FaInstagram className="text-3xl text-fuchsia-600 hover:text-purple-600" />
                        </Link>
                        
                    </div>
                </div>
            </div>
                <img
                    className="lg:w-[800px] md:w-[660px] rounded-full"
                    src={ Contactanos }
                    alt='contactanos'
                    loading='lazy'
                />
        </div>
       </div>
    )

};

export default Contactos;