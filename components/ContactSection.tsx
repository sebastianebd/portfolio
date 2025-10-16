'use client';
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


interface FormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Por favor completa este campo.'),
  email: yup
    .string()
    .trim()
    .email('El formato del correo electrónico no es válido. Ej: usuario@dominio.com')
    .required('Por favor ingresa un correo electrónico.'),
  phone: yup
    .string()
    .trim()
    .matches(phoneRegExp, 'El número de teléfono no es válido. Debe incluir al menos 7 dígitos.')
    .min(7, 'El teléfono debe tener al menos 7 dígitos.')
    .required('Por favor ingresa un numero de teléfono.'),
  message: yup
    .string()
    .trim()
    .required('El mensaje es obligatorio.')
    .min(20, 'El mensaje debe tener al menos 20 caracteres.')
}).required();


const ContactSection = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched', 
  });

  interface CustomToastOptions extends ToastOptions {
    toastClassName?: string;
  }

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        toast.success('Mensaje enviado correctamente. ¡Pronto me pondré en contacto!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: 'light',
          toastClassName: '!bg-amber-500',
        } as CustomToastOptions);
        
        reset(); 
        
      } else {
        toast.error('Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde.', {
            position: 'top-right',
            theme: 'light',
        });
      }
    } catch (error) {
        console.error('Error durante la solicitud de contacto:', error);
        toast.error('Error de red o servidor. Por favor, revisa tu conexión.', {
            position: 'top-right',
            theme: 'light',
        });
    }

    setLoading(false);
  };

  const inputClass = (name: keyof FormInputs) => `
    focus:outline-none focus:ring-0 pb-5 bg-transparent border-none
    ${errors[name] ? 'border-red-500 border-b-2 text-red-500 placeholder-red-400' : 'text-gray-300'}
  `;
  
  const dividerClass = (name: keyof FormInputs) => `
    h-[0.1px] w-full mb-4 ${errors[name] ? 'bg-red-500' : 'bg-gray-700'}
  `;
  
  const errorTextClass = 'text-red-500 text-sm mt-[-10px] mb-0';

  const buttonDisabled = loading || !isValid || (isDirty && !isValid);
  
  return (
    <section className=" relative min-h-screen md:h-auto lg:h-full bg-black overflow-hidden justify-between lg:px-15 px-5
                        lg:flex-row">

      <div>

        {/* Lado Izquierdo - Título e info */}
        <div className=' pt-14 flex flex-col items-center lg:items-start text-center lg:text-left w-full '>
          <h1 className='text-amber-500 text-xl font-semibold tracking-wide'>CONTACT ME</h1>
          <p className='text-white text-4xl font-bold pt-8 max-w-[400px]'>
            Hablemos sobre tu próximo proyecto.
          </p>
          <p className='text-gray-400 mt-4 text-lg'>
            Estoy disponible para oportunidades freelance y colaboraciones.
          </p>
        </div>

      </div>

      <div className='relative flex h-full lg:h-full lg:max-w-[1280px] md:max-w-250 max-w-150 mx-auto flex-col
                        '>
        {/* Lado Derecho - Formulario */}
        <div className='w-full  h-full bg-[var(--color-navbar)] mt-10 p-10 pb-18  shadow-2xl'>
          
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-5 text-lg'>
            
            <div className='pb-20'>
              {/* Input Nombre */}
              <input 
                type="text"
                placeholder='Tu Nombre'
                {...register('name')}
                className={inputClass('name')}
              />
              <div className={dividerClass('name')}></div>
              {errors.name && <p className={errorTextClass}>{errors.name.message}</p>}
            </div>

            <div className='pb-20'>
              {/* Input Email */}
              <input 
                type="email"
                placeholder='Tu Correo'
                {...register('email')}
                className={inputClass('email')}
              />
              <div className={dividerClass('email')}></div>
              {errors.email && <p className={errorTextClass}>{errors.email.message}</p>}
            </div>

            <div className='pb-20'>
              {/* Input Teléfono */}
              <input 
                type="tel" 
                placeholder='Teléfono'
                {...register('phone')}
                className={inputClass('phone')}
              />
              <div className={dividerClass('phone')}></div>
              {errors.phone && <p className={errorTextClass}>{errors.phone.message}</p>}
            </div>

            <div className='pb-10'>
              {/* Textarea Mensaje */}
              <textarea 
                placeholder='Mensaje'
                {...register('message')}
                className={`focus:outline-none focus:ring-0 pb-20 resize-none bg-transparent ${inputClass('message')}`}
                rows={4}
                >
              </textarea>
              <div className={dividerClass('message')}></div>
              {errors.message && <p className={errorTextClass}>{errors.message.message}</p>}
            </div>

            {/* Botón de Envío */}
            <button 
              type="submit"
              disabled={buttonDisabled} 
              className={`w-full h-15 py-3 text-lg font-semibold  transition duration-300 mt-5
                          ${buttonDisabled 
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed shadow-inner' 
                            : 'bg-amber-500 text-black hover:bg-amber-600 shadow-lg shadow-amber-500/50'}`}>
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          
          </form>
          <ToastContainer />
        </div>
      </div>
      
      <div className='pb-15 lg:mt-0 '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30052.267416559247!2d-73.19107917722563!3d-40.590446394915375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961636a5d0f98f11%3A0xd48ddb618b434a73!2sBeethoven%201018%2C%205301969%20Osorno%2C%20Los%20Lagos!5e0!3m2!1ses-419!2scl!4v1759967598500!5m2!1ses-419!2scl" 
          width="100%" 
          height="220" 
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  )
}

export default ContactSection