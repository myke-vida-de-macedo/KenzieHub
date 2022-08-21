import styled, { css } from "styled-components"

interface IPropsTitleStyled {
    size?:"small" | "medium" | "large",
    margin?: "small" | "medium" | "large",
    color?: "pink" 
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


    ${({ margin })=> 
        margin === "small" ? 
            css`
                margin:8px;
            `
        :margin === "medium" ?
            css`
                margin:12px;
            `
        :margin === "large" ?
            css` 
                margin:20px;
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
        ${({ margin })=> 
        margin === "small" ? 
            css`
                margin:11px;
            `
        :margin === "medium" ?
            css`
                margin:16px;
            `
        :margin === "large" ?
            css` 
                margin:24px;
            `
        :   
            css` 
                margin:none;
            `
        }
    }

`