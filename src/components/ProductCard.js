/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import PropTypes from 'prop-types';
import FormatRichText from './FormatRichText';
import { Link } from '@reach/router';
import ImgContainer from './ImgContainer';
import ProductHeader from './ProductHeader';
import Button from './Button';

const ProductCard = ({ imgObj, heading, description, id, date}) => {

    // HOOKS
    const { spacing, breakPoints } = useTheme()
    const { width } = useWindowSize()

    // VARIABLES
    const borderRadius = "15px";

    // FUNCTIONS
    const isMobileWidth = width < breakPoints.mobile 

    // === EMOTION STYLE ===
    const containerStyle = css`
        padding: ${spacing.m} ${spacing.s};
        /* height: ${isMobileWidth ? '645px' : '623px'}; */
        height: 630px;
        border-radius: ${borderRadius};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all .3s;

        &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px;    
        } 
    `
    const descriptionStyle = css`
        
    `

    return (
        <Link to={`/produkt/${id}`}>
            <section css={containerStyle}>
                <ImgContainer medium>
                    <img src={imgObj.file.url} alt={imgObj.title} />
                </ImgContainer>
                <ProductHeader heading={heading} date={date} />
                <div css={descriptionStyle}>
                    <FormatRichText textLimit={180}>{description}</FormatRichText>
                </div>
                <Button outline >Læs mere</Button>
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