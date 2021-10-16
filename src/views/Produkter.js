import PrintProductCards from '../components/PrintProductCards';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from '@emotion/react';

const Produkter = () => {

    // HOOKS
    // const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()

    // === EMOTION STYLE ===
    const containerStyle = css`
       margin: ${spacing.m} 0;
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
       gap: ${spacing.l};
       place-content: center;  
    `
    return (
        <div css={containerStyle}>
            <PrintProductCards />
        </div>
    );
}

export default Produkter;