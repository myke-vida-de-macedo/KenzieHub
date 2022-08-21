import { ReactNode } from "react"
import { FormStyled } from "./style"

interface IPropsForm {
    children:ReactNode
}

export default function Form( { children }:IPropsForm ){

    return(
        <FormStyled>
            { children }
        </FormStyled>
    )
}