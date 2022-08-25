import { Button, ButtonGroup, Fab } from "@mui/material"

import AddIcon from '@mui/icons-material/Add';

import Modal from "../../../components/Modal"

interface IPropsNavgation {
    onTech:()=> void,
    onWork:()=> void,
    onCreateTechOrWork:()=> void,
}

export default function Navgation({ onTech, onWork, onCreateTechOrWork }:IPropsNavgation){

    return(
        <Modal 
            maxWidth="large" 
            height={74} 
            paddingPosition={{x:true}} 
            mode="vertical"
        >
            <ButtonGroup 
                size="medium" 
                variant="contained" 
                aria-label="outlined primary button group"
            >
                <Button onClick={onTech}>Tecnologia</Button>
                <Button onClick={onWork}>Trabalho</Button>
            </ButtonGroup>
            <Fab 
                onClick={onCreateTechOrWork} 
                size="small" 
                color="primary" 
                aria-label="add"
            >
                <AddIcon />
            </Fab>
        </Modal>
    )
}