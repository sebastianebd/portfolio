'use client';
import React from 'react'
import { useState } from 'react';

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json();
      if (data.ok) {
        alert('Message sent successfully');
        console.log(data)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      }else {
        alert('Error sending message');
      }
    };

  return (
    <section className="relative min-h-screen md:h-auto lg:h-screen bg-black overflow-hidden justify-between lg:px-15 px-5
                        ">
      <div className='relative lg:w-full flex h-full lg:h-full lg:max-w-320 md:max-w-250 max-w-150 mx-auto flex-col
                        lg:flex-row'>
        <div className=' pt-15 flex flex-col items-center text-center'>
          <h1 className='text-amber-500 text-xl font-semibold tracking-wide'>CONTACT ME</h1>
          <p className='text-white text-4xl font-bold pt-8 max-w-85'>
            Lets discuss about an project!
          </p>
        </div>

        <div className='w-full h-full bg-[var(--color-bg)] mt-10 px-10 pb-18'>
          <form onSubmit={handleSubmit} className='flex flex-col text-gray-300 pt-15 text-lg'>
            <input 
              type="name"
              name='name'
              placeholder='Tu Nombre'
              value={formData.name}
              onChange={handleChange}
              className='focus:outline-none focus:ring-0 pb-4'
              required
            />
            <div className='h-[0.1px] w-full bg-gray-700 mb-15'></div>
            <input 
              type="email"
              name='email'
              placeholder='Tu Correo'
              value={formData.email}
              onChange={handleChange}
              className='focus:outline-none focus:ring-0 pb-4'
              required
            />
            <div className='h-[0.1px] w-full bg-gray-700 mb-15'></div>
            <input 
              type="phone"
              name='phone'
              placeholder='Teléfono'
              value={formData.phone}
              onChange={handleChange}
              className='focus:outline-none focus:ring-0 pb-4'
              required
            />
            <div className='h-[0.1px] w-full bg-gray-700 mb-15'></div>
            <textarea 
              name="message"
              placeholder='Mensaje'
              value={formData.message}
              onChange={handleChange}
              className='focus:outline-none focus:ring-0 pb-20 resize-none'
              required
            >
            </textarea>
            <div className='h-[0.1px] w-full bg-gray-700 mb-15'></div>
            <button 
              type="submit" 
              className='w-full h-15 bg-amber-500 text-black text-md font-semibold '>
              Enviar
            </button>

          </form>
            
        </div>
      </div>
      <div className='pb-15'>
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
