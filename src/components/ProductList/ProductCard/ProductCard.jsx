import PropTypes from "prop-types";

const ProductCard = ({brand, id, price, product}) => {
    return (
        <div>
            <span>{id}</span> -----
            <span>{brand}</span> -----
            <span>{price}</span> -----
            <span>{product}</span>
        </div>
    );
};

ProductCard.propTypes = {
    brand: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    product: PropTypes.string,
};

export default ProductCard;