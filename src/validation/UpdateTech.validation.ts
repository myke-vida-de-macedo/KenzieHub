import * as yup from "yup"

export const shemaUpdateTech = yup.object().shape({
    title:yup.string().notRequired(),
    status:yup.string().notRequired(),
})