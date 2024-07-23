const Footer = ()=>{

    const currentYear = new Date().getFullYear();

    return(

        <>
        <div className="bg-gradient-to-l from-purple-600 to-fuchsia-600 w-full h-20 flex justify-center items-center flex-col">
            <h3 className="font-bold text-white text-lg text-center">K&A Cell - Todos los derechos reservados © { currentYear }  </h3>
            <p className="text-white">Diseñado por: <strong className="font-bold"> Rob-Dev </strong></p>

        </div>
        </>
    )

};

export default Footer;