import {  ReactNode } from "react"
import { ButtonStyled } from "./style"

import Button from '@mui/material/Button';


interface IPropsBUtton {
    children:ReactNode
    size?: "small" | "medium" | "large",
    color?: "grey" | "pink" | "black" | "black2" | "transparent"
    fullWidth?:boolean,
    type?:"button" | "submit" | "reset",
    onClick?:Function,
    maxWidth?:number,
    mode?:"vertical",
    id?:string,
    groupButton?:boolean
}

export default function ButtonEdited( { children, size, fullWidth, color, type, onClick, maxWidth, mode, id, groupButton }:IPropsBUtton ){

    return(
        <ButtonStyled 
            fullWidth={fullWidth} 
            size={size} 
            color={color} 
            maxWidth={maxWidth} 
            mode={mode}
            groupButton={groupButton}
        >
            <Button 
                onClick={( e )=>onClick&&onClick( e )} 
                id={id} 
                type={type} 
                size={ size } 
                variant="contained"
            >
                { children }
            </Button>
        </ButtonStyled>
    )
}