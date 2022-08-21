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
}

export default function Header( { buttonName, colorButton, sizeButton, color, name, size }:IPropsHeader ){

    return(
        <HeaderStyled color={color} size={size} buttonName={buttonName}>
            <Title color="pink">{name}</Title>
            {
                buttonName&&<Button type="button" size={sizeButton} color={colorButton}>{buttonName}</Button>

            }
        </HeaderStyled>
    )
}