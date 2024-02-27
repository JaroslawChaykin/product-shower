import {create} from 'zustand'
import http from "../../http/http.js";

export const useProductStore = create((set) => ({
    product: [],
    productFilter: {
        brand: '',
        price: 290000,
        product: 'Серебро',
    },
    brands: {

    },
    _getProductIds: async (offset, limit = 50) => {
        const productIds = await http({
            "action": "get_ids",
            "params": {"offset": offset, "limit": limit}
        })

        return productIds.result
    },
    _getProductIdsByFilters: () => set(async (state) => {
        const productIds = await http({
            "action": "filter",
            "params": {
                brand: state.productFilter.brand || undefined,
                price: state.productFilter.price || undefined,
                product: state.productFilter.product || undefined
            }
        })

        return productIds.result
    }),
    getProduct: () => set(async (state) => {
        const productIds = await state._getProductIds(0, 20)
        // const productIdsFiltered = await state._getProductIdsByFilters()
        // console.log(productIdsFiltered)

        const product = await http({
            "action": "get_items",
            "params": {"ids": productIds}
        })

        const productsNoDoublesIds = [];

        product.result.forEach((product) => {
            if (productsNoDoublesIds.find((item) => item.id === product.id)) {
                return;
            }

            productsNoDoublesIds.push(product)
        })

        set(() => ({product: productsNoDoublesIds}))
    })
}))
