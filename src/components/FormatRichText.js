import marked from 'marked';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const FormatRichText = ({ textLimit, children, style }) => {

    const { spacing, font, colors } = useTheme()
    const description = textLimit ? `${children.substring(0, textLimit)}...` : children 

    const containerStyle = css`
        & h1, h2, h3 {
            margin-bottom: .3rem;
            font-size: ${font.size.l};
        }
        & p {
            margin-bottom: ${spacing.s};
        }
        & a {
            text-decoration: underline;
            color: ${colors.font.secondary};    
        }
    `

    return ( 
        <div css={containerStyle} style={style} 
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