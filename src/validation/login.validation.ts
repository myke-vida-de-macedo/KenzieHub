import * as yup from "yup"

export const shemaLogin = yup.object().shape({
    email:yup.string().required("Email obrigatorio").email("Email invalido"),
    password:yup.string().required("Senha obrigatoria")
})