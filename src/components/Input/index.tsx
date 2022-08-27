import { IRegister } from "../types"
import { InputStyled } from "./style"

interface IPropsInput {
    label:string,
    type?: "password" | "text",
    register?:IRegister
    name?:string,
    message?:string | undefined,
    disabled?:boolean,
}

export default function Input( { label, type, register, name, message, disabled }:IPropsInput ){
    
    return(

        <InputStyled disabled={disabled} error={ message ? true : false } type={type} size="small" label={message ? message : label} variant="filled" margin="dense" color="info" {...register(name)}/>
    )
}
