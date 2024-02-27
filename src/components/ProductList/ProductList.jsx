import PropTypes from "prop-types";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

const ProductList = ({products = []}) => {

    if (products.length === 0) {
        return (
            <Typography variant="h3" component="h2">
                Empty products
            </Typography>

        )
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map(product => <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.brand}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.product}</TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};
export default ProductList;