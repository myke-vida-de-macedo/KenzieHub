import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FilledInput, IconButton, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import { IRegister } from "../../../components/types";

import { StyledControl } from "./style";

interface IPropsInputPassword {
    register:IRegister,
    message:string | undefined,
    name:string,
    label:string
}

export default function InputPassword( { register, message, name, label }:IPropsInputPassword ){

    const [ visibility, setVisibility ] = useState<boolean>(false)

    return(
        <StyledControl  error={message ? true : false} style={{width:"100%"}} sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-password">{ message ? message : label }</InputLabel>
          <FilledInput
            id="outlined-adornment-password"
            type={visibility ? 'text' : 'password'}
            {...register(name)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=> setVisibility(!visibility)}
                  edge="end"
                >
                  {visibility ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </StyledControl>
    )
}