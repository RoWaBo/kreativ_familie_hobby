import marked from 'marked';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const FormatRichText = ({ textLimit, children }) => {

    const { spacing, font } = useTheme()
    const description = textLimit ? `${children.substring(0, textLimit)}...` : children 

    const containerStyle = css`
        & h1, h2, h3 {
            margin-top: ${spacing.s};
            font-size: ${font.size.l};
        }
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

FormatRichText.propTypes = {
    textLimit: PropTypes.number    
}

export default FormatRichText;