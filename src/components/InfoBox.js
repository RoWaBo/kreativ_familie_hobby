/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "@emotion/react";

const InfoBox = ({ children, style }) => {

    // HOOKS
    const { colors, spacing } = useTheme()

    const containerStyle = css`
        width: fit-content;
        padding: ${spacing.m};
        background: ${colors.grey.light};
        border-radius: 5px;

        & h1, h2, h3 {
            margin-bottom: 0;
        }
        & p {
            margin-bottom: 0;
        }
    `

    return ( <> 
        <div css={containerStyle} style={style}>
            { children }
        </div>
    </> );
}
 
export default InfoBox;