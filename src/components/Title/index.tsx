import { ReactNode } from "react"
import { TitleStyled } from "./style"

export interface IMarginPosition {
    y?:boolean,
    x?:boolean
}

interface IPropsTitle {
    children:ReactNode,
    size?:"small" | "medium" | "large",
    margin?:"small" | "medium" | "large",
    color?: "pink"
    marginPosition?:IMarginPosition
}

export default function Title( { children, size, margin, color, marginPosition }:IPropsTitle ){

    return(
        <TitleStyled size={size} margin={margin} color={color} marginPosition={marginPosition}>
            { children }
        </TitleStyled>
    )
}