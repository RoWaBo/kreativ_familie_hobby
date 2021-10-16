/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import useWindowSize from "../hooks/useWindowSize";
// import { useTheme } from "@emotion/react";
import useClientEntries from '../hooks/useClientEntries';
import ProductDescription from '../components/ProductDescription';

const Produkt = ({ id }) => {

    // HOOKS
    // const { width } = useWindowSize()
    // const { colors, font, spacing, breakPoints } = useTheme()
    const product = useClientEntries(null, id)
    console.log(product);
    // FUNCTIONS
    // VARIABLES

    // === EMOTION STYLE ===
    const imgContainerStyle = css`

        & > img { 
            max-height: 600px;
            object-fit: cover;
            object-position: center;
        }   
    `
    return (
        <>
            {product && (<>
                <div css={imgContainerStyle}>
                    <img src={product.fields.billede.fields.file.url} alt={product.fields.billede.fields.title} />
                </div>
                <header>
                    <h1>{product.fields.overskrift}</h1>
                    <p>{product.sys.createdAt.substring(0, 10)}</p>
                </header>
                <ProductDescription>{product.fields.beskrivelse}</ProductDescription>
            </>)}
        </>
    );
}

export default Produkt;