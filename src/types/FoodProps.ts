
export interface FoodProps {
    id: number;
    img: string;
    img_1280x1080: string;
    isBookMarked: boolean;
    commentsCount: number;
    rating: number;
    title: string;
    price: number;
    discount: number;
    deliveryTime: {
        from: number;
        to: number;
    },
    categoryId: number
}