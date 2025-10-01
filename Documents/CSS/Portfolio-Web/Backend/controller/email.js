import nodemailer from "nodemailer";

const enviarEmail = async (req, res)=>{
    const { nombres, email, message } = req.body; 

    try{

        const transporter =  nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER_GMAIL,
                pass: process.env.PASS_GMAIL
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.USER_GMAIL,
            subject: "Nuevo mensaje de contacto",
            text: `Nombre: ${nombres}\nCorreo: ${email}\nMensaje: ${message}`, 
        })

        res.status(200).json({ message: "Mensaje enviado satisfactoriamente" })

    }catch(error){
        console.log(error);
        res.status(500).json({error: "Error en el servidor"});
    }


};

export default enviarEmail; 