import { useState } from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

import Input from '../utils/input';

import formSchema from "../utils/zodValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import Button from '../utils/button';
import emailjs from "@emailjs/browser";
import { useTranslation } from 'react-i18next';
import { Loader2 } from "lucide-react";
import Toast from '../helpers/alert';

const Contact = () => {
   const { t } = useTranslation();

  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      names: '',
      email : '',
      message: '',
      company: ''
    }
  });

  const [ loading, setLoading ] = useState(false);

  const formSubmit = async (datos)=>{

    const {names, email, message, company} = datos;

    //Evitar sobreenviar varios correos en pocos segundos
    const now = Date.now();

    const lastSend = localStorage.getItem("last_send_time");

    if(lastSend && now - lastSend < 30000){
      Toast({
        icon: "warning",
        title: "Solicitud rechazada",
        text: "Espera unos segundos antes de enviar otro mensaje",
        error: true
      });

      return;
    }

    //Evitar el envio de mensajes por bots
     if(company){
      return;
     };

     setLoading(true);
      try{

        //Configuración de emailJs para enviar mensajes al correo
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            from_name: names,
            from_email: email,
            message
          },
          process.env.REACT_APP_PUBLIC_KEY
      )

      //Guardar en localStorage si es correcto
      localStorage.setItem("last_send_time", now);

      Toast({
        icon: "success",
        title: "Operación satisfactoria",
        text: "Mensaje enviado con éxito",
        error: false
      })

          reset();

      }catch(error){
        console.log("Error al enviar correo:", error.message);
        Toast({
            icon: "error",
            title: "Error del servidor",
            text: "Mensaje no pudo ser enviado, intente nuevamente",
            error: true
          })
      }finally{
        setLoading(false);
      }
    };
 
  return <section className='section' id='contact'>
    <div className='container mx-auto mb-20 lg:mb-0'>
      <div className='flex flex-col lg:flex-row items-center'>
        <motion.div 
        variants={fadeIn('right, 0.3')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
            <h4 className='h2 text-accent mb-2 tracking-wide font-bold'>{t("contact")}</h4>
            <h2 className='text-[53px] lg:text-[90px] leading-none mb-12'>{t("advertisement")}
            </h2>
          </div>
        </motion.div>
        <motion.form 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount: 0.5}}
        className='flex flex-1 w-full flex-col border rounded-2xl gap-y-6 pb-8 p-4'
        onSubmit={handleSubmit(formSubmit)}>
          <input
            type="text"
            name="company"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          <Input 
            type="text"
            name="names"
            control={control}
            placeholder={t("name")}
            error={errors.names}
          />
          <Input 
            type="email"
            name="email"
            control={control}
            placeholder={t("email")}
            error={errors.email}
          />
          <Input 
            name="message"
            as='textarea'
            control={control}
            placeholder={t("message")}
            error={errors.message}
          />
          <Button type="submit" disabled={loading}>
            <div className='flex items-center justify-center'>
              {loading ? t("sending") : t("send") }
              { loading && 
              <Loader2 
                  className='mr-2 w-5 h-5 animate-spin'
              />}
            </div>
          </Button>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
