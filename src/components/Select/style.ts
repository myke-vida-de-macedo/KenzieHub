import styled, { css } from "styled-components"

export const SelectStyled = styled.div`
    

    width: 100%;

    height: 48px;
    min-height: 48px;
    
    background-color: var(--color-background-input);
    

    border-radius: 4px;

    @media(min-width:369px){
            height: 56px;
            min-height: 56px;
    }

    label{
        box-sizing: border-box;

        height: 48px;
        min-height: 48px;

        @media(min-width:369px){
            height: 56px;
            min-height: 56px;
        }
    }

    margin: 8px;
    
    .MuiFormLabel-root{
        color:var(--color-text-input);

        :focus{
            color: var(--color-text-input-focus);
        }     
    }

    .MuiInputBase-root{
        box-sizing: border-box;

        height: 48px;
        min-height: 48px;

        color:var(--color-text-input);

        :focus{
            color: var(--color-text-input-focus);
        }    

        @media(min-width:369px){
            height: 56px;
            min-height: 56px;
        }
        .MuiSelect-select{
            box-sizing: border-box;
    
            height: 48px;
            min-height: 48px;
    
            @media(min-width:369px){
                height: 56px;
                min-height: 56px;
            }
        }
    }
    

    #form{
        box-sizing: border-box;

        height: 48px;
        min-height: 48px;

        @media(min-width:369px){
            height: 56px;
            min-height: 56px;
        }
    }
`