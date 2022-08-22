import styled, { css } from "styled-components"

import { IMarginPosition, IPaddingPosition } from "./index"
interface IPropsStyledModal {
    color?:string,
    marginPosition?:IMarginPosition,
    paddingPosition?:IPaddingPosition,
    maxWidth?: "small" | "medium" | "large";
    height?: number,
    borderBottom?:boolean,
    mode?: "vertical",
}

export const ModalStyled = styled.div<IPropsStyledModal>`

    box-sizing:border-box; 

    transition: 200ms;

    width: 100%;
    ${({maxWidth})=> 
        maxWidth === "large" ?
            css`
                max-width: 780px;
            `
        : maxWidth === "small" ?
            css`
                max-width: 369px;
            `
        :
            css`
                max-width: 100%;
            `
    }

    ${({ borderBottom })=> borderBottom&&css`border-bottom:1px solid var(--color-grey-2);`}

    ${({height})=> 
        height ?
            css`
                height: ${`${height}px`};
            `
        :   
            css`
                height: auto;
            `
    }

   

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

    ${({ mode }) => 
        mode === "vertical" ? 
            css`
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;

                @media(min-width:430px){
                    justify-content: space-between;
                }
            `
        :
            css`
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
            `
    }
    
   
    

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