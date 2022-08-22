import Button from "../Button"
import Title from "../Title"
import { HeaderStyled } from "./style"

interface IPropsHeader {
    buttonName?:string,
    color?: "grey" ,
    name:string,
    size?: "small" | "medium" | "large",
    colorButton?: "grey" | "pink" | "black",
    sizeButton?: "small" | "medium" | "large",
    onClick?:()=> void,
    colorTitle?: "pink",
    sizeTitle?: "small" | "large" | "medium"
}

export default function Header( { buttonName, colorButton, sizeButton, color, name, size, onClick, colorTitle, sizeTitle }:IPropsHeader ){

    return(
        <HeaderStyled color={color} size={size} buttonName={buttonName}>
            <Title color={colorTitle} size={sizeTitle}>{name}</Title>
            {
                buttonName&&<Button onClick={onClick} type="button" size={sizeButton} color={colorButton}>{buttonName}</Button>

            }
        </HeaderStyled>
    )
}