/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import useClientEntries from '../hooks/useClientEntries';
import FormatRichText from '../components/FormatRichText';
import ProductHeader from '../components/ProductHeader';
import ImgContainer from '../components/ImgContainer';

const Produkt = ({ id }) => {

    // HOOKS
    const { font, spacing } = useTheme()
    const product = useClientEntries(null, id)
    console.log(product);

    // === EMOTION STYLE ===
    const articleStyle = css`
        /* margin: ${spacing.wrapping} 0; */
    `
    const textContainerStyle = css`
        margin: 0 auto;
        padding: 0 ${spacing.wrapping};
        max-width: ${spacing.textWidth};
    `
    return (
        <>
            {product && ( <>
                <article css={articleStyle}>
                    <ImgContainer large contentWidth>
                        <img src={product.fields.billede.fields.file.url} alt={product.fields.billede.fields.title} />
                    </ImgContainer>
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