import { ReactNode } from "react"
import { FormStyled } from "./style"

interface IPropsForm {
    children:ReactNode,
    onSubimt?:any
}

export default function Form( { children, onSubimt }:IPropsForm ){

    return(
        <FormStyled onSubmit={onSubimt}>
            { children }
        </FormStyled>
    )
}