import Button from "../Button"
import Title from "../Title"
import { HeaderStyled } from "./style"

import { IMarginPosition } from "../Title"

interface IPropsHeader {
    buttonName?:string,
    color?: "grey" ,
    name:string,
    size?: "small" | "medium" | "large",
    colorButton?: "grey" | "pink" | "black",
    sizeButton?: "small" | "medium" | "large",
    onClick?: ( event?:any ) => void,
    colorTitle?: "pink",
    sizeTitle?: "small" | "large" | "medium",
    marginTitle?: "small" | "medium" | "large",
    marginPositionTitle?:IMarginPosition
}

export default function Header( { buttonName, colorButton, sizeButton, color, name, size, onClick, colorTitle, sizeTitle, marginTitle, marginPositionTitle }:IPropsHeader ){

    return(
        <HeaderStyled color={color} size={size} buttonName={buttonName}>
            <Title color={colorTitle} size={sizeTitle} margin={marginTitle} marginPosition={marginPositionTitle}>{name}</Title>
            {
                buttonName&&<Button onClick={onClick} type="button" size={sizeButton} color={colorButton}>{buttonName}</Button>

            }
        </HeaderStyled>
    )
}