/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import useClientEntries from '../hooks/useClientEntries';
import FormatRichText from '../components/FormatRichText';
import ProductHeader from '../components/ProductHeader';
import ImgContainer from '../components/ImgContainer';
import InfoBox from '../components/InfoBox';
import useMediaQuery from '../style/useMediaQuery';
import useWindowSize from '../hooks/useWindowSize';

const Produkt = ({ location }) => {

    // VARIABLES
    const searchParams = new URLSearchParams(location.search)
    const productID = searchParams.get("id")
    
    // HOOKS
    const { spacing } = useTheme()
    const product = useClientEntries(null, productID)
    const mq = useMediaQuery()
    const { width } = useWindowSize()
    
    const mobileView = width < 737

    // === EMOTION STYLE ===
    const articleStyle = css`
        margin: auto;
        max-width: ${spacing.contentWidth};
        padding: 0 ${spacing.wrapping};
        display: ${mobileView ? "block" : "flex"};
    `
    const textContainerStyle = css`
        flex: 1;
        display: grid;
        margin: 0 auto;
        padding: ${spacing.s} 0 ${spacing.s} ${spacing.xl};
        ${mobileView && `padding: ${spacing.s} 0;`}
    `
    const imgContainerStyle = css`
        flex: 1;
    `
    const imageStyle = css`
        object-fit: cover;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
    `
    const infoBoxStyle = {
        alignSelf: 'end',
    }

    return (
        <>
            {product && (<>
                <article css={articleStyle}>
                    <div css={imgContainerStyle}>
                        <img css={imageStyle} src={product.fields.billede.fields.file.url} alt={product.fields.billede.fields.title} />
                    </div>
                    <div css={textContainerStyle}>
                        <div css={css`align-self: flex-start;`}>
                            <ProductHeader
                                heading={product.fields.overskrift}
                                date={product.sys.createdAt}
                            />
                            <FormatRichText>
                                {product.fields.beskrivelse}
                            </FormatRichText>
                        </div>

                        {product.fields.infotekstbox && (<>
                            <InfoBox style={infoBoxStyle}>
                                <FormatRichText>
                                    {product.fields.infotekstbox}
                                </FormatRichText>
                            </InfoBox>
                        </>)}
                    </div>
                </article>
            </>)}
        </>
    );
}

export default Produkt;