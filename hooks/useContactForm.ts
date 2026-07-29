import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastOptions } from "react-toastify";
import { contactValidationSchema, ContactFormInputs } from "@/lib/validations/contactSchema";

interface CustomToastOptions extends ToastOptions {
  toastClassName?: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactValidationSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (formData) => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        toast.success(
          "Mensaje enviado correctamente. ¡Pronto me pondré en contacto!",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            toastClassName: "!bg-amber-500",
          } as CustomToastOptions,
        );

        reset();
      } else {
        toast.error(
          "Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde.",
          {
            position: "top-right",
            theme: "light",
          },
        );
      }
    } catch (error) {
      console.error("Error durante la solicitud de contacto:", error);
      toast.error("Error de red o servidor. Por favor, revisa tu conexión.", {
        position: "top-right",
        theme: "light",
      });
    }

    setLoading(false);
  };

  const buttonDisabled = loading || !isValid || (isDirty && !isValid);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    buttonDisabled,
  };
};
