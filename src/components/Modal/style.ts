import styled, { css } from "styled-components"

export const ModalStyled = styled.div`

    box-sizing:border-box; 
    
    transition: 200ms;

    width: 100%;
    max-width: 369px;
    height: auto;

    padding: 12px;
    margin: 12px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(min-width:369px){

        padding: 20px;
    }
`