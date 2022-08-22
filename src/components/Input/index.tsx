import { InputStyled } from "./style"



interface IPropsInput {
    label:string,
    type?: "password" | "text",
    register?:any,
    name?:string,
    message?:string | undefined,
}

export default function Input( { label, type, register, name, message }:IPropsInput ){
    
    return(

        <InputStyled error={ message ? true : false } type={type} size="small" label={message ? message : label} variant="filled" margin="dense" color="info" {...register(name)}/>
    )
}
