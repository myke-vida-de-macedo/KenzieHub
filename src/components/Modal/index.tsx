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
    maxWidth?:"small" | "medium" | "large";
    height?: number,
    borderBottom?:boolean,
    mode?: "vertical",
    borderRadiusPosition?: "all" | "top" | "bottom",
    id?:string
}

export default function Modal( { children, color, marginPosition, paddingPosition, maxWidth, height, borderBottom, mode, borderRadiusPosition, id }:IPropsModal ){

    return(
        <ModalStyled 
            id={id}
            color={color} 
            marginPosition={marginPosition} 
            paddingPosition={paddingPosition} 
            maxWidth={maxWidth} 
            height={height} 
            borderBottom={borderBottom} 
            mode={mode}
            borderRadiusPosition={borderRadiusPosition}
        >
            { children }
        </ModalStyled>
    )
}