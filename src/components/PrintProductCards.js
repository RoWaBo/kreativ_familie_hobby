import ProductCard from './ProductCard';
import useClientEntries from "../hooks/useClientEntries";
import Skeleton from './Skeleton';

const PrintProductCards = () => {

    const products = useClientEntries("product")

    // products && console.log(products);
 
    return ( 
        <Skeleton>
            {products && products.map(product => (
                <ProductCard key={product.sys.id} 
                    imgObj={product.fields.billede.fields}
                    heading={product.fields.overskrift}
                    description={product.fields.beskrivelse}
                    id={product.sys.id}
                    date={product.sys.createdAt}
                />    
            ))}
        </Skeleton>
     );
}

export default PrintProductCards;