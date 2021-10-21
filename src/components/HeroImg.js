/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import useClientEntries from '../hooks/useClientEntries';

const HeroImg = () => {

    const { spacing } = useTheme()
    const heroImage = useClientEntries("forsideHeroBillede")

    const heroImgStyle = css`
        max-width: ${spacing.contentWidth};
        max-height: 40vh;
        padding: 0 ${spacing.wrapping};
        object-fit: cover;
        object-position: center;
        margin: 0 auto;
        border-radius: 5px;
    `

    return ( <> 
        {heroImage && (
            <img css={heroImgStyle} 
                src={heroImage[0].fields.billede.fields.file.url} 
                alt={heroImage[0].fields.billede.fields.title} 
            />    
        )}
    </> )
}
 
export default HeroImg;