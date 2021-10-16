/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import PropTypes from 'prop-types';
import ProductDescription from './ProductDescription';
import { Link } from '@reach/router';
import ImgContainer from './ImgContainer';

const ProductCard = ({ imgObj, heading, description, id, date}) => {

    // HOOKS
    // const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()
    // VARIABLES
    const borderRadius = "15px";
    // FUNCTIONS

    // === EMOTION STYLE ===
    const containerStyle = css`
        padding: ${spacing.m} ${spacing.s};
        height: 570px;
        border-radius: ${borderRadius};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all .3s;

        &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px;    
        } 
    `
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
        font-weight: ${font.weight.medium};
    `
    return (
        <Link to={`/produkt/${id}`}>
            <section css={containerStyle}>
                <ImgContainer medium>
                    <img src={imgObj.file.url} alt={imgObj.title} />
                </ImgContainer>
                <header css={headerStyle}>
                    <h1 css={headingStyle}>{heading}</h1>
                    <p css={dateStyle}>{date.substring(0, 10)}</p>
                </header>
                <ProductDescription textLimit={180}>{description}</ProductDescription>
            </section>
        </Link>
    );
}

ProductCard.propTypes = {
    imgObj: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default ProductCard;