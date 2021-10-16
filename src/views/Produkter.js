import PrintProductCards from '../components/PrintProductCards';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from '@emotion/react';

const Produkter = () => {

    // HOOKS
    const { spacing } = useTheme()

    // === EMOTION STYLE ===
    const containerStyle = css`
       max-width: ${spacing.contentWidth};
       margin: ${spacing.wrapping} auto;
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