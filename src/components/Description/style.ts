import styled, { css } from "styled-components"

interface IPropsDescriptionStyled {
    size?:string,
    margin?:string,
}

export const DescriptionStyled = styled.div<IPropsDescriptionStyled>`

    font-family: var(--font-global);

    ${({ size })=> 
        size === "small" ? 
            css`
                font-size: 5px;
                font-weight: 600;
            `
        :size === "medium" ?
            css`
                font-size: 7px;
                font-weight: 600;
            `
        :
            css` 
                font-size: 9px;
                font-weight: 600;
            `
    }

    color:var(--color-description-perfil);

    ${({ margin })=> 
        margin === "small" ? 
            css`
                margin:8px;
            `
        :margin === "medium" ?
            css`
                margin:12px;
            `
        :
            css` 
                margin:20px;
            `
    }

    @media(min-width:369px){

        ${({ size })=> 
            size === "small" ? 
                css`
                    font-size: 8px;
                `
            :size === "medium" ?
                css`
                    font-size: 10px;
                `
            :
                css`
                    font-size: 12px;
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
        :
            css` 
                margin:24px;
            `
        }
    }
`