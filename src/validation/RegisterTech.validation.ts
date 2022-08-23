import * as yup from "yup"

export const shemaRegisterTech = yup.object().shape({
    title:yup.string().required("Nome obrigatorio"),
    status:yup.string().required("Status obrigatorio"),
})