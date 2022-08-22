import styled, { css } from "styled-components"
import { IMarginPosition } from "../Modal"

interface IPropsTitleStyled {
    size?:"small" | "medium" | "large",
    margin?: "small" | "medium" | "large",
    color?: "pink",
    marginPosition?:IMarginPosition,
}

export const TitleStyled = styled.div<IPropsTitleStyled>`

    font-family: var(--font-global);

    ${({ size })=> 
        size === "small" ? 
            css`
                font-size: 10px;
                font-weight: 700;
            `
        :size === "medium" ?
            css`
                font-size: 12px;
                font-weight: 600;
            `
        : size === "large" ?
            css` 
                font-size: 14px;
                font-weight: 700;
            `
        :   
            css`
                font-size: 20px;
                font-weight: 800;
            `
    }

    ${({ color }) => 

        color === "pink" ? 
            css`
                color:var(--color-primary);
            `
        : 
            css`
                color:var(--color-title-perfil);
            `
    }
    ${({ marginPosition })=> 

        marginPosition?.y && marginPosition?.x ?
            css`
            
            `
        : marginPosition?.y && !marginPosition?.x ?
            css`
            
            `
        : !marginPosition?.y && marginPosition?.x ?
            css`
            
            `
        :
            css`
                margin: none;
            `
    }

    ${({ margin, marginPosition })=> 
        margin === "small" ? 
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:8px;
                `
            : marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:8px 0px;
                `
            : !marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 8px;
                `
            :
                css`
                    margin: none;
                `
        :margin === "medium" ?
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:12px;
                `
            : marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:12px 0px;
                `
            : !marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 12px;
                `
            :
                css`
                    margin: none;
                `
        :margin === "large" ?
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:20px;
                `
            : marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:20px 0px;
                `
            : !marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 20px;
                `
            :
                css`
                    margin: none;
                `
        :
            css` 
                margin:none;
            `
    }

    @media(min-width:369px){

        ${({ size })=> 
            size === "small" ? 
                css`
                    font-size: 14px;
                `
            :size === "medium" ?
                css`
                    font-size: 16px;
                `
            :size === "large" ?
                css`
                    font-size: 18px;
                `
            :
                css`
                    font-size: 24px;
                    font-weight: 800;       
                `
            }
      
        ${({ margin, marginPosition })=> 
        margin === "small" ? 
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:11px;
                `
            : marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:11px 0px;
                `
            : !marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 11px;
                `
            :
                css`
                    margin: none;
                `
        :margin === "medium" ?
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:16px;
                `
            : marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:16px 0px;
                `
            : !marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 16px;
                `
            :
                css`
                    margin: none;
                `
        :margin === "large" ?
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:24px;
                `
            : marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:24px 0px;
                `
            : !marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 24px;
                `
            :
                css`
                    margin: none;
                `
            :
                css` 
                    margin:none;
                `
        }
    }
`