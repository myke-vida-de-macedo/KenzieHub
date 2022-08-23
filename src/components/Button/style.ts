import styled, { css } from 'styled-components'

interface IPropsButtonStyled {
    fullWidth?:boolean,
    size?:"small" | "medium" | "large",
    color?: "grey" | "pink" | "black" | "black2" | "transparent"
    maxWidth?:number,
    mode?:"vertical"
}

export const ButtonStyled = styled.div<IPropsButtonStyled>`

    box-sizing: border-box;

    ${({fullWidth})=> fullWidth&&css` width:100%;`}


    .MuiButtonBase-root{
        
        text-transform:capitalize;

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

    display: flex;
    align-items: center;
    ${({ mode })=>
        mode === "vertical" ?
            css`
                justify-content: space-between;
            `
        :
            css`
                justify-content: center;
            `
    }

        transition: 300ms;
        
        width: 100%;
        max-width:${({ maxWidth }) => maxWidth ? `${maxWidth}px` : "369px"};

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
            :color === "black2" ?  
                css`
                    background-color:var(--color-grey-4);
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
            :color === "black2" ?  
                css`
                    background-color:var(--color-grey-2);
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