import styled, { css } from "styled-components"

interface IPropsHeaderStyled {
    color?: "grey" ,
    size?: "small" | "medium" | "large",
    buttonName?:string,
}

export const HeaderStyled = styled.div<IPropsHeaderStyled>`
    box-sizing: border-box;
    
    display: flex;
    align-items: center;

    ${({ buttonName })=>
        buttonName ? 
            css`
                justify-content: space-between;
            `
        :
            css`
                justify-content: center;
            `
    }   

    

    width: 100%;
    
    ${({size})=>

        size === "small" ?
            css`

            `
        :size === "medium" ?
            css`
                    
            `
        :size === "large" ?
            css`
                    height: 95px;
            `
        :
            css`
                    height: 100%;
            `
    }

        ${({color})=>

        color === "grey" ?
            css`    
                background-color: var(--color-background-header-2);
            `
        :   
            css`
                background-color: var(--color-background);
            `
        }
    

    @media(min-width:369px){
        ${({size})=>

        size === "small" ?
            css`

            `
        :size === "medium" ?
            css`
                    
            `
        :size === "large" ?
            css`
                    height: 120px;
            `
        :
            css`
                    height:none;
            `
        }
    }
`