import { ReactNode } from "react"
import { DescriptionStyled } from "./style"

import { IMarginPosition } from "../Title"

interface IPropsDescription {
    children:ReactNode,
    size?:string,
    margin?:string,
    marginPosition?:IMarginPosition
}

export default function Description( { children, size, margin, marginPosition }:IPropsDescription ){

    return(
        <DescriptionStyled size={size} margin={margin} marginPosition={marginPosition}>
            { children }
        </DescriptionStyled>
    )
}