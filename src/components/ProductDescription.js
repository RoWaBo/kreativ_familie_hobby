import marked from 'marked';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ProductDescription = ({ textLimit, children }) => {

    const description = textLimit ? `${children.substring(0, textLimit)}...` : children 

    const containerStyle = css`
        display: grid;
        place-content: center;
    `

    return ( 
        <div css={containerStyle} 
            dangerouslySetInnerHTML={
                {
                __html: marked(description)
                }
            }
        />
     );
}

ProductDescription.propTypes = {
    textLimit: PropTypes.number    
}

export default ProductDescription;