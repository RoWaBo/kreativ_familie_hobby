/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "@emotion/react";
import PropTypes from 'prop-types';
import FormatRichText from './FormatRichText';
import { Link } from '@reach/router';
// import ImgContainer from './ImgContainer';
import ProductHeader from './ProductHeader';
import Button from './Button';

const ProductCard = ({ imgObj, heading, description, id, date}) => {

    // HOOKS
    const { spacing, colors } = useTheme()

    // VARIABLES
    const borderRadius = "15px";

    // === EMOTION STYLE ===
    const containerStyle = css`
        padding: ${spacing.m} ${spacing.s};
        /* height: 550px; */
        border-radius: ${borderRadius};
        background-color: ${colors.background.secondary};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all .3s;

        /* display: flex;
        flex-direction: column;
        justify-content: space-between;  */


        &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px;    
        } 
    `
    const imgContainerStyle = css`

        & > img {
            height: 300px;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
        }
    `

    return (
        <Link to={`/produkt?id=${id}`}>
            <section css={containerStyle}>
                {/* <ImgContainer medium>
                    <img src={imgObj.file.url} alt={imgObj.title} />
                </ImgContainer> */}
                <div css={imgContainerStyle}>
                    <img src={imgObj.file.url} alt={imgObj.title} />
                </div>
                <ProductHeader small heading={heading} date={date} />
                <FormatRichText textLimit={130} style={{ height: '140px' }}>{description}</FormatRichText>
                <Button outline >Se {heading}</Button>
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