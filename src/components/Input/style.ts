import styled from "styled-components"
import TextField from '@mui/material/TextField';

export const InputStyled = styled(TextField)`

    box-sizing: border-box;
    height: 48px;
    min-height: 48px;

    width: 100%;
    max-width: 369px;

    background-color: var(--color-background-input);

    border-radius: 4px; 

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 20px;

    @media(min-width:369px){
            height: 56px;
            min-height: 56px;
    }

    label{
        box-sizing: border-box;
        height: 48px;
        min-height: 48px;

        color: var(--color-text-input);
        
        @media(min-width:369px){
            height: 56px;
            min-height: 56px;

            line-height:2em;
        }
    }

    input{
        box-sizing: border-box;
        height: 48px;
        min-height: 48px;

        color:var(--color-text-input);

        @media(min-width:369px){
            height: 56px;
            min-height: 56px;
        }

        :focus{
            color:var(--color-text-input-focus);
        }   
    }
`