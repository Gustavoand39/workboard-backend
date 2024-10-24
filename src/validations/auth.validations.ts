import { body } from "express-validator";

export const validateSignUp = [
  body("email").isEmail().withMessage("El email no es válido"),
  body("password")
    .isString()
    .withMessage("La contraseña debe ser un string")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/\d/)
    .withMessage("La contraseña debe tener al menos un número")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("La contraseña debe tener al menos un caracter especial"),
];
