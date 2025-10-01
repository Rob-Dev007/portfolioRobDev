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
import Alert from '../helpers/alert';
import clientAxios from '../config/axios';
import { useTranslation } from 'react-i18next';
import { Loader2 } from "lucide-react";
import Swal from "sweetalert2"

const Contact = () => {
   const { t } = useTranslation();

  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      nombres: '',
      email : '',
      message: ''
    }
  });

  const [ loading, setLoading ] = useState(false);

  const formSubmit = async (data)=>{
     console.log("Enviando datos:", data);

     setLoading(true);
      try{
        const response = await clientAxios.post('/contact', data);


        
        if(response.data.status === 200){
          setTimeout(()=>{
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Mensaje enviado con éxito",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              background: "#f0fdf4",
              color: "#16a34a"
            })
          }, 3000)

          reset();
        }
      }catch(error){
        console.log(error);
        Swal.fire({
              toast: true,
              position: "top-end",
              icon: "error",
              title: "Mensaje no pudo ser enviado, intente nuevamente",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              background: "#f0fdf4",
              color: "#e62424ff"
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
          <Input 
            type="text"
            name="nombres"
            control={control}
            placeholder={t("name")}
            error={errors.nombres}
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
