import { create } from 'zustand'
import http from "../../http/http.js";

export const useProductStore = create((set) => ({
    product: [],
    _getProductIds: async (offset, limit = 50) => {
        const productIds = await http({
            "action": "get_ids",
            "params": {"offset": offset, "limit": limit}
        })

        return productIds.result
    },
    getProduct: () => set(async (state) => {
        const productIds = await state._getProductIds(0, 2)

        const product = await http({
            "action": "get_items",
            "params": {"ids": productIds}
        })

        set(() => ({product: product.result}))
    })
}))
