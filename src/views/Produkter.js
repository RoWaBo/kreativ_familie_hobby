import PrintProductCards from '../components/PrintProductCards';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from '@emotion/react';
import useMediaQuery from '../style/useMediaQuery';

const Produkter = () => {

    // HOOKS
    const { spacing } = useTheme()
    const mq = useMediaQuery()

    // === EMOTION STYLE ===
    const containerStyle = css`
       max-width: ${spacing.contentWidth};
       margin: 0 auto;
       padding: ${mq(['0', `0 ${spacing.wrapping}`])};
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
       gap: ${spacing.gutter};
       place-content: center;  
    `
    return (
        <main css={containerStyle}>
            <PrintProductCards />
        </main>
    );
}

export default Produkter;