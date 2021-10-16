/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
// import { useTheme } from "@emotion/react";
import useClientEntries from '../hooks/useClientEntries';

const Produkt = ({ id }) => {

    // HOOKS
    // const { width } = useWindowSize()
    // const { colors, font, spacing, breakPoints } = useTheme()
    const product = useClientEntries(null, id)

    // FUNCTIONS
    // VARIABLES
    
    // === EMOTION STYLE ===
    const style = css`
    
    `
    return ( 
        <>

        </>
     );
}

export default Produkt;