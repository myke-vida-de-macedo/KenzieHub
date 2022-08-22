import { ReactNode } from "react"
import { ButtonStyled } from "./style"

import Button from '@mui/material/Button';

interface IPropsBUtton {
    children:ReactNode
    size?: "small" | "medium" | "large",
    color?: "grey" | "pink" | "black" | "transparent"
    fullWidth?:boolean,
    type?:"button" | "submit" | "reset",
    onClick?:any,
}

export default function ButtonEdited( { children, size, fullWidth, color, type, onClick }:IPropsBUtton ){

    return(
        <ButtonStyled fullWidth={fullWidth} size={size} color={color}>
            <Button onClick={onClick} type={type} size={ "small" } variant="contained">{ children }</Button>
        </ButtonStyled>
    )
}