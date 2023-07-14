
interface DeliveryTime {
    from: number;
    to: number;
}

export interface FoodCard_1Props {
    id: number;
    img: string;
    isBookMarked: boolean;
    deliveryTime: DeliveryTime;
    commentsCount: number;
    rating: number;
    title: string;
    price: number;
    discount: number | undefined;
}