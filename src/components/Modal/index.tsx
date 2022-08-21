import { ReactNode } from "react"
import { ModalStyled } from "./style"

interface IPropsModal {
    children:ReactNode
}

export default function Modal( { children }:IPropsModal ){

    return(
        <ModalStyled>
            { children }
        </ModalStyled>
    )
}