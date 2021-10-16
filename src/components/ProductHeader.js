/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "@emotion/react";
import PropTypes from 'prop-types';

const ProductHeader = ({ heading, date }) => {

    // HOOKS
    const { font, spacing } = useTheme()

    // === EMOTION STYLE ===
    const headerStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: ${spacing.s} 0;   
    `
    const dateStyle = css`
        font-weight: ${font.weight.light};
    `
    const headingStyle = css`
        font-size: ${font.size.xl};
    `

    return (
        <header css={headerStyle}>
            <h1 css={headingStyle}>{heading}</h1>
            <p css={dateStyle}>{date.substring(0, 10)}</p>
        </header>
    );
}

ProductHeader.propTypes = {
    heading: PropTypes.string.isRequired,    
    date: PropTypes.string.isRequired    
}

export default ProductHeader;