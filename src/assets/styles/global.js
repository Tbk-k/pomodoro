import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        margin: 0;
    }

    h1{
        color: #D7E0FF;
        font:${({ font }) => `bold 2.4rem/1 ${font}`};
    }

    h2{
        font:${({ font }) => `bold 2rem/1 ${font}`};
    }

    h3{
        font:${({ font }) => `bold 1.1rem/1 ${font}`};
        letter-spacing:0.423rem;

    }

    button{
        font:${({ font }) => `bold 1.4rem/1 ${font}`};
        letter-spacing:1.3rem;
        color: #d7e0ff;
        border: none;
        cursor: pointer;
        transition: color .3s;
        &:hover{
            color: ${({ color }) => color};
        }
    }
    li{
        color: #979797;
        font:${({ font }) => `bold 1.2rem/1 ${font}`};
        transition: color 0.5s;
        cursor: pointer;
        &.active {
            transition: color 0.5s;
            z-index: 1;
            color: #1e213f;
        }
        &:hover{
            color: #d7e0ff;
        }
    }

    @media screen and (min-width:768px){
        h1{
            font:${({ font }) => `bold 3.2rem/1 ${font}`};

        }

        h2{
            font:${({ font }) => `bold 2.8rem/1 ${font}`};

        }

        h3{
            font:${({ font }) => `bold 1.3rem/1 ${font}`};
            letter-spacing:0.5rem;
        }

        button{
            font:${({ font }) => `bold 1.6rem/1 ${font}`};
            letter-spacing:1.5rem
        }
        li{
           font:${({ font }) => `bold 1.2rem/1 ${font}`};
        }
    }
    `;
