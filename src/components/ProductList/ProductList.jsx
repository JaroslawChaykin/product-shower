import PropTypes from "prop-types";
import ProductCard from "./ProductCard/ProductCard.jsx";

const ProductList = ({products}) => {
    return (
        <div>
            {
                products.map(product => {
                    return (<ProductCard {...product} key={product.id}/>)
                })
            }
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};
export default ProductList;