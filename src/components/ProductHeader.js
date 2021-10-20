/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "@emotion/react";
import PropTypes from 'prop-types';

const ProductHeader = ({ heading, date, style, small }) => {

    // HOOKS
    const { font, spacing } = useTheme()

    // === EMOTION STYLE ===
    const headerStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center; 
    `
    const headerSmallStyle = css`
        margin-bottom: ${spacing.xs};   
    `

    const dateStyle = css`
        font-weight: ${font.weight.light};
        font-size: ${font.size.m};
    `
    const dateSmallStyle = css`
        text-align: right;
        font-weight: ${font.weight.light};
        font-size: ${font.size.s};
        margin-top: ${spacing.xs};
        margin-bottom: -10px;
    `
    const headingStyle = css`
        font-size: ${font.size.xl};
    `

    return (
        <header css={small ? headerSmallStyle : headerStyle} style={style}>
            {small && (
                <p css={dateSmallStyle}>{date.substring(0, 10)}</p>
            )}
            <h1 css={headingStyle}>{heading}</h1>
            {!small && (
                <p css={dateStyle}>{date.substring(0, 10)}</p>
            )}
        </header>
    );
}

ProductHeader.propTypes = {
    heading: PropTypes.string.isRequired,    
    date: PropTypes.string.isRequired    
}

export default ProductHeader;