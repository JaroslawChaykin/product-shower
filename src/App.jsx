import {useEffect} from "react";
import ProductList from "./components/ProductList/ProductList.jsx";
import {useProductStore} from "./store/Product/ProductStore.js";
import './App.css'

function App() {
    const productStore = useProductStore()

    useEffect(() => {
        productStore.getProduct()
    }, [])

  return (
    <>
        {productStore.product &&
            <ProductList products={productStore.product} />
        }
    </>
  )
}

export default App
