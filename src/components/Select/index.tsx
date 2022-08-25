import { SelectStyled } from "./style"

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from "@mui/material";

import { v4 as uuid } from "uuid"

interface IPropsSelect {
    menu:string[],
    label:string,
    register?:any,
    name?:string,
    message?:string | undefined,
}

export default function SelectEdited({ menu, label, register, name, message }:IPropsSelect){
    return(
        <SelectStyled>
            <FormControl error={message ? true : false} id="form" variant="filled" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-select-small">{label}</InputLabel>
                <Select 
                    size="small"
                    fullWidth
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label={label}
                    {...register(name)}
                >
                    {
                        menu.map( name => <MenuItem key={uuid()} value={name}>{name}</MenuItem> )
                    }
                </Select>
                </FormControl>
            </SelectStyled>
    )
}