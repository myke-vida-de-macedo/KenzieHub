import Title from "../Title"
import { HeaderStyled } from "./style"

interface IPropsHeader {
    buttonName?:string,
    color?: "grey" ,
    name:string,
    size?: "small" | "medium" | "large"
}

export default function Header( { buttonName, color, name, size }:IPropsHeader ){

    return(
        <HeaderStyled color={color} size={size} buttonName={buttonName}>
            <Title color="pink">{name}</Title>
        </HeaderStyled>
    )
}