import { ReactNode } from "react"
import { TitleStyled } from "./style"

interface IPropsTitle {
    children:ReactNode,
    size?:"small" | "medium" | "large",
    margin?:"small" | "medium" | "large",
    color?: "pink"
}

export default function Title( { children, size, margin, color }:IPropsTitle ){

    return(
        <TitleStyled size={size} margin={margin} color={color}>
            { children }
        </TitleStyled>
    )
}