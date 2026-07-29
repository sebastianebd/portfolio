import * as yup from "yup";

export interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactValidationSchema = yup
  .object({
    name: yup
      .string()
      .trim()
      .required("Por favor completa este campo.")
      .max(50),
    email: yup
      .string()
      .trim()
      .email(
        "El formato del correo electrónico no es válido. Ej: usuario@dominio.com",
      )
      .required("Por favor ingresa un correo electrónico.")
      .max(50),
    phone: yup
      .string()
      .trim()
      .matches(
        phoneRegExp,
        "El número de teléfono no es válido. Debe incluir al menos 7 dígitos.",
      )
      .min(7, "El teléfono debe tener al menos 7 dígitos.")
      .max(20)
      .required("Por favor ingresa un numero de teléfono."),
    message: yup
      .string()
      .trim()
      .required("El mensaje es obligatorio.")
      .min(20, "El mensaje debe tener al menos 20 caracteres.")
      .max(300),
  })
  .required();
