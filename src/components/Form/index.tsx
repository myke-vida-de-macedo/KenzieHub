import { ReactNode } from "react"
import { FormStyled } from "./style"

interface IPropsForm {
    children:ReactNode,
    onSubimt?:( event?:any ) => void
}

export default function Form( { children, onSubimt }:IPropsForm ){

    return(
        <FormStyled onSubmit={onSubimt}>
            { children }
        </FormStyled>
    )
}