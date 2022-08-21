import { SelectStyled } from "./style"

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from "@mui/material";

interface IPropsSelect {
    menu:string[],
    label:string,
}

export default function SelectEdited({ menu, label }:IPropsSelect){

    return(
        <SelectStyled>
            <FormControl id="form" variant="filled" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-select-small">{label}</InputLabel>
                <Select 
                    size="small"
                    fullWidth
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label={label}
                >
                    {
                        menu.map( name => <MenuItem value={name}>{name}</MenuItem> )
                    }
                </Select>
                </FormControl>
            </SelectStyled>
    )
}