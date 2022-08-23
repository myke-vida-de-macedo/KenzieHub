import * as yup from "yup"

export const shemaUpdateWork = yup.object().shape({
    title:yup.string().notRequired(),
    description:yup.string().notRequired(),
    deploy_url:yup.string().notRequired(),
})