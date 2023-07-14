
import { create } from "zustand"
import { produce } from "immer"
import { CartStoreProps, SingleCartItemProps } from "./types"

const useCartStore = create<CartStoreProps>(
    (set, get) => ({
        data: {
            items: [],
            totalPrice: 0
        },
        api: {
            itemsCount: () => get().data.items?.length || 0,

            addNewItem: (data) => set(
                produce((state: CartStoreProps) => {

                    const isItemExists = state.data.items?.findIndex((item) => item.id === data.id)

                    if (isItemExists === -1) {
                        state.data.items?.push({
                            ...data,
                            count: 1
                        })
                    }
                    else {
                        const newItems = state.data.items?.map(item => {
                            if(item.id === data.id) {
                                const res: SingleCartItemProps = {
                                    ...item,
                                    count: typeof item.count === "number" ? item.count+1 : 1
                                }
                                return res
                            }
                            else {
                                return item
                            }
                        })
                        state.data.items = newItems
                    }

                    state.data.totalPrice = state.data.totalPrice + data.price
                })
            ),

            removeItemById: (id: number) => set(
                produce((state: CartStoreProps) => {
                    state.data.items?.forEach((item) => {
                        const isFind = item.id === id
                        if(isFind) {
                            state.data.totalPrice = state.data.totalPrice - item.price
                            if(typeof item.count === "number" && item.count > 1) {
                                state.data.items = state.data.items.map(filterItem => {
                                    if(filterItem.id === item.id) {
                                        const newItem = {...filterItem};
                                        newItem.count = newItem.count ? newItem.count - 1 : 1
                                        return newItem
                                    }
                                    return filterItem
                                })
                            }
                            else if(typeof item.count === "number" && item.count <= 1) {
                                state.data.items = state.data.items.filter(filterItem => filterItem.id !== item.id)
                            }
                        }
                    })
                })
            ),

            clearCart: () => set(
                produce((state: CartStoreProps) => {
                    state.data.items = []
                })
            )
        }
    })
)

export {
    useCartStore
}