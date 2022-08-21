import styled, { css } from "styled-components"

import { IMarginPosition, IPaddingPosition } from "./index"
interface IPropsStyledModal {
    color?:string,
    marginPosition?:IMarginPosition,
    paddingPosition?:IPaddingPosition,
}

export const ModalStyled = styled.div<IPropsStyledModal>`

    box-sizing:border-box; 

    transition: 200ms;

    width: 100%;
    max-width: 369px;
    height: auto;

    ${({marginPosition})=> 
        marginPosition?.y && marginPosition?.x ? 
            css`
                margin: 12px;
            `
        :marginPosition?.y && !marginPosition?.x ? 
            css`
                margin: 12px 0px;
            `
        :marginPosition?.x && !marginPosition?.y? 
            css`
                margin: 0px 12px;
            `
        :
            css`
                margin: 0px;
            `
    }

    ${({paddingPosition})=> 
        paddingPosition?.y && paddingPosition?.x ? 
            css`
                padding: 6px 12px;
            `
        :paddingPosition?.y && !paddingPosition?.x ? 
            css`
                padding: 6px 0px;
            `
        :paddingPosition?.x && !paddingPosition?.y? 
            css`
                padding: 0px 12px;
            `
        :
            css`
                padding: 0px;
            `
    }

      
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    ${({ color })=>
        color === "black"? 
            css`
                background-color: var(--color-background);
            `
        :color == "grey" ?
            css`
                background-color: var(--color-background-modal);
            `
        :
            css`
                background-color:transparent;
            `

    }

    border-radius: var(--border-radius);

    @media(min-width:369px){

        ${({paddingPosition})=> 
        paddingPosition?.y && paddingPosition?.x ? 
            css`
                padding:10px 20px;
            `
        :paddingPosition?.y && !paddingPosition?.x ? 
            css`
                padding:10px 0px;
            `
        :paddingPosition?.x && !paddingPosition?.y? 
            css`
                padding:0px 20px;
            `
        :
            css`
                padding: 0px;
            `
    }
    }
`