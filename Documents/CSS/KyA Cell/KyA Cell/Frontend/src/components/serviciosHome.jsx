import { MdOutlinePhoneAndroid, MdOutlineDesktopMac } from 'react-icons/md';
import { GrConfigure } from 'react-icons/gr'
const Servicios = ()=>{
    return(
        <div>
            <div className="sm:grid sm:grid-rows-1f 2fr sm:grid-cols-3 bg-gradient-to-b from-purple-600 to-fuchsia-600 w-full lg:h-auto lg:my-20 gap-x-8 xl:px-80 p-8 place-content-evenly ">
                <h3 className="col-start-1 col-end-4 row-start-1 row-end-2 w-full text-center font-bold text-white text-2xl p-4">K&A Cell te ofrece los siguientes servicios:</h3>
                <div className="bg-white rounded-xl w-full h-auto col-start-1 col-end-2 row-start-2 row-end-3 my-12 pb-2">
                    <div className='m-2 h-44 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-lg'>
                    <div className='flex justify-center items-center w-full  h-full'>
                        <MdOutlinePhoneAndroid 
                        className='text-6xl text-white'/>
                    </div>
                    </div>
                    <div className='mx-3 my-5'>
                        <h2 className='font-bold text-center text-xl'>Accesorios de teléfonos móviles</h2>
                        <p className='my-5 mx-3'>Te ofrecemos cases, micas de vidrio, micas de hidrogel, auriculares, cables de datos, cargadores y todo para tu celular</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl w-full h-auto col-start-2 col-end-3 row-start-2 row-end-3 my-12 pb-2">
                <div className='m-2 h-44 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-lg'>
                    <div className='flex justify-center items-center w-full  h-full'>
                        <MdOutlineDesktopMac 
                        className='text-6xl text-white'/>
                    </div>
                    </div>
                    <div className='mx-3 my-5'>
                        <h2 className='font-bold text-center text-xl'>Accesorios de computadoras</h2>
                        <p className='my-5 mx-3'>Te ofrecemos auriculares, teclados, parlantes, mouse, camaras web, entre otros productos más.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl w-full h-auto col-start-3 col-end-4 row-start-2 row-end-3 my-12 pb-2">
                <div className='m-2 h-44 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-lg'>
                    <div className='flex justify-center items-center w-full  h-full'>
                        <GrConfigure
                        className='text-6xl text-white'/>
                    </div>
                    </div>
                    <div className='mx-3 my-5'>
                        <h2 className='font-bold text-center text-xl'>Servicio técnico</h2>
                        <p className='my-5 mx-3'>Ademas, te ofrecemos servicio técnico para tu teléfono móvil, cambio de pin de carga, placas lógicas de carga, cambio de baterias, entre muchos servicios más</p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Servicios;