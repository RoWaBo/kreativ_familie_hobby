// import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";

const DefaultComponentTemplate = () => {

    // HOOKS
    const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()
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

// DefaultComponentTemplate.propTypes = {
//     name: PropTypes.string    
// }

export default DefaultComponentTemplate;