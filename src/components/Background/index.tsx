import { ReactNode } from "react"
import { useModal } from "../../provider/Modal"
import { BackgroundStyled } from "./style"

interface IPropsBackground {
    children:ReactNode,
}

export default function Background({ children }:IPropsBackground){

    const { closeAllModal } = useModal()

    const closeBackground = ( { target }:any ) => {
        
        if( target.id === "background" || target.id === "background-2"  ){
            closeAllModal()
        }
    }

    return(
        <BackgroundStyled onClick={closeBackground} id="background">
            { children }
        </BackgroundStyled>
    )
}