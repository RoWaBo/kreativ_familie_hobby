import ProductCard from './ProductCard';
import { contentTypeNames } from "../contentTypeNames";
import useClientEntries from "../hooks/useClientEntries";

const PrintProductCards = () => {

    const products = useClientEntries(contentTypeNames.products)

    // products && console.log(products);
 
    return ( 
        <>
            {products && products.map(product => (
                <ProductCard key={product.sys.id} 
                    imgObj={product.fields.billede.fields}
                    heading={product.fields.overskrift}
                    description={product.fields.beskrivelse}
                    id={product.sys.id}
                    date={product.sys.createdAt}
                />    
            ))}
        </>
     );
}

export default PrintProductCards;