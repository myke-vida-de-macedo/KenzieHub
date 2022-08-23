import styled, { css } from "styled-components"

export const BackgroundStyled = styled.div`
    position: fixed;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    min-height: 100vh;

    background: rgba(18, 18, 20, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index:1000000000999999999999;
`