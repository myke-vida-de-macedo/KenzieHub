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
    borderRadiusPosition?: "all" | "top" | "bottom"
}

export const ModalStyled = styled.div<IPropsStyledModal>`

    box-sizing:border-box; 

    transition: 300ms;

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

                align-items: center;
                flex-wrap: wrap;


                    justify-content: space-between;

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
                background-color: var(--color-background-modal);
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

    ${({ borderRadiusPosition })=>
        borderRadiusPosition === "all" ? 
            css`
                border-radius:  var(--border-radius);
            `
        :borderRadiusPosition === "top" ? 
            css`
                border-radius:  var(--border-radius)  var(--border-radius) 0px 0px;
            `
        :borderRadiusPosition === "bottom"? 
            css`
                border-radius: 0px 0px var(--border-radius)  var(--border-radius);
            `
        :
            css`
                border-radius: 0px;
            `
    }

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