// import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
// import { useTheme } from "@emotion/react";

const ImgContainer = ({ small, medium, large, children, style }) => {

    // HOOKS
    // const { width } = useWindowSize()
    // const { colors, font, spacing, breakPoints } = useTheme()
    // FUNCTIONS
    const maxHeight = () => {
        if (small) return "100px" 
        if (medium) return "300px" 
        if (large) return "600px" 
    }
    // VARIABLES
    
    // === EMOTION STYLE ===
    const imgContainerStyle = css`
        ${maxHeight() && (`max-height: ${maxHeight()}`)};
        border-radius: 15px;
        overflow: hidden;
        
        & > img {
            ${maxHeight() && (`max-height: ${maxHeight()}`)};
            object-fit: cover;
            object-position: center;
        }
    `
    return ( 
        <div css={imgContainerStyle} style={style}>
            { children }
        </div>
     );
}

// ImgContainer.propTypes = {
//     name: PropTypes.string    
// }

export default ImgContainer;