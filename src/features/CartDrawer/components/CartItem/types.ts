
interface CartItemProps {
    id: number;
    title: string;
    count: number;
    discount: number;
    price: number;
    img: string;
    onDecreaseClick(id: number): void;
    onIncreaseClick(id: number): void
}

export type {
    CartItemProps
}