import MapComponent from "../components/MapComponent";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const Contactanos = ()=>{
    return(
        <div id="contactanos" className="w-full min-h-vh px-4 lg:px-20 xl:px-44 py-20">
                <h1 className="text-center text-fuchsia-600 text-4xl lg:text-6xl font-black my-8">Contáctanos</h1>
                <div className="grid md:grid-cols-2 gap-8 content-center">
                <div>
                    <div className="my-3 flex items-center md:justify-start justify-center">
                        < LuMapPin className="text-6xl text-fuchsia-600"/>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="text-3xl font-bold text-center md:text-start my-2">Ubicanos</h3>
                        <p className="md:text-xl text-lg my-2 mr-4"><strong>Dirección: </strong>Av.Gran Colombia y Guaranda, sector mercado Mayorista, frente a la Coopmego</p>
                        <strong className="md:text-xl text-lg">Loja-Ecuador</strong>
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
                    <div className="border-4 border-fuchsia-600 outline">
                        <MapComponent />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 mt-24 content-center place-items-center">
                    <div>
                        <h2 className="text-5xl font-dark text-fuchsia-600 mb-8">Escribenos</h2>
                        <p className="text-2xl font-bold">Si tienes dudas, comentarios y/o sugerencias, contáctanos. Estaremos complacidos de responderte</p>
                    </div>
                    <form 
                    className="w-full border-4 border-fuchsia-600 p-4 rounded-xl flex flex-col gap-4"
                    method="POST">
                        <label className="text-lg font-bold text-fuchsia-600">Nombres</label>
                        <input
                        className="bg-gradient-to-r from-fuchsia-300 to-purple-300 px-3 py-2 rounded-xl text-black text-lg outline-none focus:bg-gradient-to-r focus:from-fuchsia-600 focus:to-purple-600 focus:text-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-purple-400"
                        placeholder="Ingrese sus nombres"
                        type="text"
                        />
                        <label className="text-lg font-bold text-fuchsia-600">Correo</label>
                        <input
                        className="bg-gradient-to-r from-fuchsia-300 to-purple-300 px-3 py-2 rounded-xl text-black text-lg outline-none focus:bg-gradient-to-r focus:from-fuchsia-600 focus:to-purple-600 focus:text-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-purple-400"
                        placeholder="Ingrese su correo"
                        type="text"
                        />
                        <label className="text-lg font-bold text-fuchsia-600">Mensaje</label>
                        <textarea
                        className="bg-gradient-to-r from-fuchsia-300 to-purple-300 px-3 py-2 rounded-xl text-black text-lg outline-none resize-none h-44 hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-purple-400  focus:bg-gradient-to-r focus:from-fuchsia-600 focus:to-purple-600 focus:text-white"
                        placeholder="Ingrese el mensaje"
                        type="text"
                        ></textarea>
                        <div className="flex justify-end">
                            <input 
                            type="submit"
                            className="button-hover"
                            />
                        </div>
                    </form>
                </div>
        </div>
    )
};

export default Contactanos;