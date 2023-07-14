
interface SingleCartItemProps {
    id: number;
    title: string;
    img: string;
    price: number;
    count?: number;
}

interface CartStoreProps {
    data: {
        items: Array<SingleCartItemProps>;
        totalPrice: number;
    };
    api : {
        itemsCount(): number;
        addNewItem(data: SingleCartItemProps): void;
        removeItemById(id: number): void;
        clearCart(): void;
    }
}

export type {
    SingleCartItemProps,
    CartStoreProps
}