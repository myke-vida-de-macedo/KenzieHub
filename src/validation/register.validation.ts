import * as yup from "yup"

export const shemaRegister = yup.object().shape({
    email: yup
        .string()
        .required("Email obrigatorio")
        .email(),
    password: yup
        .string()
        .required("Senha obrigatorio")
        .min(6, "No minimo 6 caracteres"),
    confirmPassword: yup
        .string()
        .required("Confirmar senha")
        .oneOf([yup.ref<string>('password')], "Senha diferente"),
    name: yup
        .string()
        .required("Nome obrigatorio"),
    bio: yup
        .string()
        .required("Bio obrigatorio"),
    contact: yup
        .string()
        .required("Contato obrigatorio"),
    course_module: yup
        .string()
        .required("Modulo obrigatorio"),
})