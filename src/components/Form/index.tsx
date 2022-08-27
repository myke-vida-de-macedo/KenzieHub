import { ReactNode } from "react"
import { FormStyled } from "./style"

interface IPropsForm {
    children:ReactNode,
    onSubimt?:( event:React.FormEvent<HTMLFormElement> )=> void
}

export default function Form( { children, onSubimt }:IPropsForm ){

    return(
        <FormStyled onSubmit={( e )=>onSubimt&&onSubimt( e )}>
            { children }
        </FormStyled>
    )
}