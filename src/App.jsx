import {useEffect} from "react";
import ProductList from "./components/ProductList/ProductList.jsx";
import {useProductStore} from "./store/Product/ProductStore.js";
import {Container} from "@mui/material";
import './App.css'

function App() {
    const productStore = useProductStore()

    useEffect(() => {
        productStore.getProduct()
    }, [])

  return (
    <div>
        <Container maxWidth={'lg'}>
            {productStore.product &&
                <ProductList products={productStore.product} />
            }
        </Container>
    </div>
  )
}

export default App
