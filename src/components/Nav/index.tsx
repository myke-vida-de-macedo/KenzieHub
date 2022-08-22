import { ReactNode } from "react"
import { NavStyled } from "./style"

interface IPropsNav {
    children:ReactNode
}

export default function Nav( { children }: IPropsNav ){

    return(
        <NavStyled>
            { children }
        </NavStyled>
    )
}