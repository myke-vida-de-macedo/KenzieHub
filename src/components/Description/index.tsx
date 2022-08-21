import { ReactNode } from "react"
import { DescriptionStyled } from "./style"

interface IPropsDescription {
    children:ReactNode,
    size?:string,
    margin?:string,
}

export default function Description( { children, size, margin }:IPropsDescription ){

    return(
        <DescriptionStyled size={size} margin={margin}>
            { children }
        </DescriptionStyled>
    )
}