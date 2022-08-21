import { ReactNode } from "react"
import { ModalStyled } from "./style"

export interface IMarginPosition {
    y?:boolean,
    x?:boolean,
}

export interface IPaddingPosition {
    y?:boolean,
    x?:boolean,
}

interface IPropsModal {
    children:ReactNode,
    color?:string,
    marginPosition?:IMarginPosition,
    paddingPosition?:IPaddingPosition,
}

export default function Modal( { children, color, marginPosition, paddingPosition }:IPropsModal ){

    return(
        <ModalStyled color={color} marginPosition={marginPosition} paddingPosition={paddingPosition}>
            { children }
        </ModalStyled>
    )
}