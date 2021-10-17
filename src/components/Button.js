import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const Button = ({ children, onClick, outline, style }) => {

    const buttonStyle = ({ colors, font, spacing }) => css`
        width: max-content;
        padding: ${spacing.xs};
        font-size: ${font.size.m};
        background-color: ${colors.primary.main};
        color: ${colors.primary.contrast};
        text-transform: uppercase;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

        ${outline && (`
            background-color: ${colors.background.primary};
            border: 1px solid ${colors.primary.main};
            color: ${colors.font.primary};
        `)}

        &:hover {
            background-color: ${colors.primary.dark};
            color: ${colors.primary.contrastText};
        }

        & > * {
            pointer-events: none;
        }
    `

    return ( <button css={buttonStyle} onClick={onClick} style={style}>{ children }</button> );
}
 
export default Button;