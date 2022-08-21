import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    *{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;

        --color-white:#F5F5F5;

        --color-grey-1:#868E96;
        --color-grey-2:#343B41;
        --color-grey-3:#212529;
        --color-grey-4:#121214;

        --color-success:#3FE864;
        --color-negative:#E83F5B;


        --color-buttom-1:var(--color-primary);
        --color-buttom-1-focus:var(--color-primary-focus);
        --color-buttom-1-desability:var(--color-primary-negative);

        --color-buttom-2:var(--color-grey-1);
        --color-buttom-2-focus:var(--color-grey-2);

        --color-buttom-3:var(--color-grey-3);
        --color-buttom-3-focus:var(--color-grey-2);

        --color-text-button:var(--color-white);


        --color-listCard:var(--color-grey-3);
        --color-card-background:var(--color-grey-4);
        --color-card-background-hover:var(--color-grey-2);
        --color-card-background-focus:var(--color-grey-1);
        --color-title-card:var(--color-white);
        --color-description-card:var(--color-grey-1);

        
        --color-background:var(--color-grey-4);
        --color-background-modal:var(--color-grey-3);
        --color-background-header-2:var(--color-grey-2);

        --color-background-input:var(--color-grey-2);
        --color-text-input:var(--color-grey-1);
        --color-text-input-focus:var(--color-white);



        --color-title-perfil:var(--color-white);
        --color-description-perfil:var(--color-grey-1);
        

        --font-global:'Inter', sans-serif;


        --border-radius:4px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`