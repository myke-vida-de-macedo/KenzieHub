import { InputStyled } from "./style"

interface IPropsInput {
    label:string
}

export default function Input( { label }:IPropsInput ){

    return(

        <InputStyled size="small" label={label} variant="filled" margin="dense" color="info"/>
    )
}
