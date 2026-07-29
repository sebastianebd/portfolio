"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormInputs } from "@/lib/validations/contactSchema";

const ContactSection = () => {
  const { register, handleSubmit, errors, loading, buttonDisabled } = useContactForm();


  const inputClass = (name: keyof ContactFormInputs) => `
    focus:outline-none focus:ring-0 pb-5 bg-transparent border-none peer
    ${
      errors[name]
        ? "border-red-500 border-b-2 text-red-500 placeholder-red-400"
        : "text-gray-300"
    }
  `;

  const dividerClass = (name: keyof ContactFormInputs) => `
    h-[2px] w-full mb-4 transition-colors duration-300 ${
      errors[name] ? "bg-red-500" : "bg-gray-700 peer-focus:bg-amber-500"
    }
  `;

  const errorTextClass = "text-red-500 text-sm mt-[-10px] mb-0";


  return (
    <section
      id="contact"
      className=" relative h-auto bg-black overflow-hidden justify-between lg:px-15 px-5 pb-20
                        lg:flex-row"
    >
      {/* Lado Izquierdo - Título e info */}
      <div className=" pt-14 flex flex-col items-center text-center lg:text-left w-full ">
        <h1 className="text-amber-500 text-xl xl:text-2xl font-semibold tracking-wide">
          CONTACT ME
        </h1>
        <p className="text-white text-4xl font-bold pt-8 max-w-[400px] lg:max-w-full 2xl:text-5xl pb-5">
          Hablemos sobre tu próximo proyecto!
        </p>
      </div>

      <div
        className="relative flex h-full lg:h-full lg:max-w-360 md:max-w-250 max-w-150 mx-auto flex-col lg:flex-row
                          "
      >
        {/* Lado Derecho - Formulario */}
        <div
          className="w-full  h-full bg-[var(--color-navbar)] mt-10 p-10 xl:px-30 xl:pt-18 pb-18 shadow-2xl lg:flex-1 lg:min-w-[520px] 
                          "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col pt-5 text-lg"
          >
            <div className="pb-20">
              {/* Input Nombre */}
              <input
                type="text"
                placeholder="Tu Nombre"
                {...register("name")}
                className={`${inputClass("name")} w-full`}
                maxLength={50}
              />
              <div className={dividerClass("name")}></div>
              {errors.name && (
                <p className={errorTextClass}>{errors.name.message}</p>
              )}
            </div>

            <div className="pb-20">
              {/* Input Email */}
              <input
                type="email"
                placeholder="Tu Correo"
                {...register("email")}
                className={`${inputClass("email")} w-full`}
                maxLength={50}
              />
              <div className={dividerClass("email")}></div>
              {errors.email && (
                <p className={errorTextClass}>{errors.email.message}</p>
              )}
            </div>

            <div className="pb-20">
              {/* Input Teléfono */}
              <input
                type="tel"
                placeholder="Teléfono"
                {...register("phone")}
                className={`${inputClass("phone")} w-full`}
                maxLength={20}
              />
              <div className={dividerClass("phone")}></div>
              {errors.phone && (
                <p className={errorTextClass}>{errors.phone.message}</p>
              )}
            </div>

            <div className="pb-10">
              {/* Textarea Mensaje */}
              <textarea
                placeholder="Mensaje"
                {...register("message")}
                className={`focus:outline-none focus:ring-0 pb-20 resize-none bg-transparent ${inputClass(
                  "message",
                )} w-full`}
                rows={5}
                maxLength={300}
              ></textarea>
              <div className={dividerClass("message")}></div>
              {errors.message && (
                <p className={errorTextClass}>{errors.message.message}</p>
              )}
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              disabled={buttonDisabled}
              className={`w-full h-15 py-3 text-lg font-semibold  transition duration-300 mt-5
                            ${
                              buttonDisabled
                                ? "bg-gray-700 text-gray-400 cursor-not-allowed shadow-inner"
                                : "bg-amber-500 text-black hover:bg-amber-600 shadow-lg shadow-amber-500/50"
                            }`}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
          <ToastContainer />
        </div>

        <div className="pb-15 h-[350px] md:h-[450px] lg:pb-0 lg:mt-10 lg:h-auto lg:flex lg:flex-1 lg:ml-5 lg:max-w-[460px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30052.267416559247!2d-73.19107917722563!3d-40.590446394915375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961636a5d0f98f11%3A0xd48ddb618b434a73!2sBeethoven%201018%2C%205301969%20Osorno%2C%20Los%20Lagos!5e0!3m2!1ses-419!2scl!4v1759967598500!5m2!1ses-419!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
