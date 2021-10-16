import { Global, css, useTheme } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const GlobalStyle = () => {

    const { colors, font } = useTheme()

    const globalStyles = css`

        @import url(${font.fontImportUrl});

        * {
            margin:0;
            padding:0;
            box-sizing:border-box;
            line-height: ${font.lineHeight};
            font-family: ${font.family};
            color: ${colors.font.primary};
        }
        img {
            width:100%;
            height:auto;
            display:block;
        }
        a {
            text-decoration: none;
            color: ${colors.font.primary};
        }
        ul {
            list-style: none;
        }
        body {
            background-color: ${colors.background.primary};
        }
        h1, h2, h3, h4 {
            font-size: ${font.size.l};
            font-weight: ${font.weight.regular};
        }
        p {
            font-size: ${font.size.m};
            font-weight: ${font.weight.regular};
            color: ${colors.font.secondary};
        } 
    `

    return <Global styles={globalStyles} />
}

export default GlobalStyle;