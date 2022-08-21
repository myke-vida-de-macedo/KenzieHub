import styled, { css } from 'styled-components'

interface IPropsButtonStyled {
    fullWidth?:boolean,
    size?:"small" | "medium" | "large",
    color?: "grey" | "pink" | "black" | "transparent"
}

export const ButtonStyled = styled.div<IPropsButtonStyled>`

    box-sizing: border-box;

    ${({fullWidth})=> fullWidth&&css` width:100%;`}

    display: flex;
    justify-content: center;

    .MuiButtonBase-root{

        ${({ size })=> 
            size === "medium" ? 
                css`
                    height: 32px;
                `
            :
                css`
                    height: 38px;
                `
        }

        transition: 300ms;

        width: 100%;
        max-width: 369px;

        margin: 8px 0px;

        ${({ color })=>
        
            color === "black" ?
                css`
                    background-color:var(--color-buttom-3);
                `
            :color === "grey" ?
                css`
                    background-color:var(--color-buttom-2);
                `
            :color === "pink" ?
                css`
                    background-color:var(--color-buttom-1);
                `
            :   
                css`
                    background-color:transparent;
                    box-shadow: none;
                `
        }

        color:var(--color-text-button);

        :hover{
            transition: 300ms;

            ${({ color })=>
        
            color === "black" ?
                css`
                    background-color:var(--color-buttom-3-focus);
                `
            :color === "grey" ?
                css`
                    background-color:var(--color-buttom-2-focus);
                `
            :color === "pink" ?
                css`
                    background-color:var(--color-buttom-1-focus);
                `
            :
                css`
                    background-color:transparent;
                    box-shadow: none;
                `
        }
        }

        @media(min-width:369px){

            ${({ size })=> 
                size === "medium" ? 
                    css`
                        height: 40px;
                    `   
                :
                    css`
                        height: 48px;
                    `
            }
        }
    }
`