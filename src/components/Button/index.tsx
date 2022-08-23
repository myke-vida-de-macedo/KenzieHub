import { ReactNode } from "react"
import { ButtonStyled } from "./style"

import Button from '@mui/material/Button';

interface IPropsBUtton {
    children:ReactNode
    size?: "small" | "medium" | "large",
    color?: "grey" | "pink" | "black" | "black2" | "transparent"
    fullWidth?:boolean,
    type?:"button" | "submit" | "reset",
    onClick?:any,
    maxWidth?:number,
    mode?:"vertical",
    id?:string,
}

export default function ButtonEdited( { children, size, fullWidth, color, type, onClick, maxWidth, mode, id }:IPropsBUtton ){

    return(
        <ButtonStyled fullWidth={fullWidth} size={size} color={color} maxWidth={maxWidth} mode={mode}>
            <Button onClick={onClick} id={id} type={type} size={ size } variant="contained">{ children }</Button>
        </ButtonStyled>
    )
}