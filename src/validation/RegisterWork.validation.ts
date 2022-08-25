import * as yup from "yup"

export const shemaRegisterWork = yup.object().shape({
    title:yup.string().required("Nome obrigatorio"),
    description:yup.string().required("Descrição obrigatorio"),
    deploy_url:yup.string().required("Link obrigatorio"),
})