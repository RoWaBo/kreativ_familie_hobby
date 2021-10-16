// import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";

const ImgContainer = ({ small, medium, large, children, style, contentWidth }) => {

    // HOOKS
    // const { width } = useWindowSize()
    const { spacing } = useTheme()

    // FUNCTIONS
    const maxHeight = () => {
        if (small) return "100px" 
        if (medium) return "300px" 
        if (large) return "50vh" 
    }
    
    // === EMOTION STYLE ===
    const imgContainerStyle = css`
        ${maxHeight() && (`max-height: ${maxHeight()}`)};
        border-radius: 15px;
        overflow: hidden;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        
        ${large && (`
            width: fit-content;
        `)}
        ${contentWidth && (`
            max-width: ${spacing.contentWidth};
            margin: 0 auto;    
        `)}
        
        & > img {
            ${maxHeight() && (`max-height: ${maxHeight()}`)};
            object-fit: ${large ? 'contain' : 'cover'};
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