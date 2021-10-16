/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import useClientEntries from '../hooks/useClientEntries';
import FormatRichText from '../components/FormatRichText';
import ProductHeader from '../components/ProductHeader';

const Produkt = ({ id }) => {

    // HOOKS
    const { font, spacing } = useTheme()
    const product = useClientEntries(null, id)
    console.log(product);

    // === EMOTION STYLE ===
    const articleStyle = css`
        /* margin: ${spacing.wrapping} 0; */
    `
    const imgContainerStyle = css`

        & > img { 
            max-height: 600px;
            object-fit: cover;
            object-position: center;
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
    const textContainerStyle = css`
        margin: 0 auto;
        padding: 0 ${spacing.wrapping};
        max-width: ${spacing.contentWidth};
    `
    return (
        <>
            {product && (<>
                <article css={articleStyle}>
                    <div css={imgContainerStyle}>
                        <img src={product.fields.billede.fields.file.url} alt={product.fields.billede.fields.title} />
                    </div>
                    <div css={textContainerStyle}>
                        <ProductHeader
                            heading={product.fields.overskrift}
                            date={product.sys.createdAt}
                        />
                        <FormatRichText>
                            {product.fields.beskrivelse}
                        </FormatRichText>
                        
                        {product.fields.infotekstbox && ( <>
                            <FormatRichText>
                                {product.fields.infotekstbox}    
                            </FormatRichText>   
                        </> )}
                    </div>
                </article>
            </>)}
        </>
    );
}

export default Produkt;