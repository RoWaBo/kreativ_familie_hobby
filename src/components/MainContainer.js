/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "@emotion/react";

const MainContainer = ({ children }) => {

    // HOOKS
    const { spacing } = useTheme()

    // === EMOTION STYLE ===
    const style = css`
        margin: ${spacing.m} 0;    
    `

    return <main css={style}>{ children }</main>
}

export default MainContainer;