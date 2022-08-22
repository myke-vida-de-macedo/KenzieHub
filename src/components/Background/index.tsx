import { ReactNode } from "react"
import { BackgroundStyled } from "./style"

interface IPropsBackground {
    children:ReactNode,
}

export default function Background({ children }:IPropsBackground){

    return(
        <BackgroundStyled id="background">
            { children }
        </BackgroundStyled>
    )
}