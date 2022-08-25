import styled, { css } from "styled-components"

import { IMarginPosition } from "../Title"

interface IPropsDescriptionStyled {
    size?:string,
    margin?:string,
    marginPosition?:IMarginPosition
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
            :
            marginPosition?.y && marginPosition?.x ?
                css`
                    margin:20px;
                `
            :marginPosition?.y && !marginPosition?.x ?
                css`
                    margin:20px 0px;
                `
            :!marginPosition?.y && marginPosition?.x ?
                css`
                    margin:0px 20px;
                `
            :
                css`
                    margin: none;
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
                :
                marginPosition?.y && marginPosition?.x ?
                    css`
                        margin:24px;
                    `
                :marginPosition?.y && !marginPosition?.x ?
                    css`
                        margin:24px 0px;
                    `
                :!marginPosition?.y && marginPosition?.x ?
                    css`
                        margin:0px 24px;
                    `
                :
                    css`
                        margin: none;
                    `
            }
    }
`