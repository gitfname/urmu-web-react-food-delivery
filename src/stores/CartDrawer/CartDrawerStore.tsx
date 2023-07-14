
import { create } from "zustand"
import { produce } from "immer"
import { CartDrawerStoreProps } from "."


const useCartDrawerStore = create<CartDrawerStoreProps>(
    set => ({
        isOpen: false,
        setIsOpen: data => set(
            produce((state: CartDrawerStoreProps) => {
                state.isOpen = data
            })
        )
    })
)

export {
    useCartDrawerStore
}