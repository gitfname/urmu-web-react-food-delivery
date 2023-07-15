
import { FoodProps } from "../types";
import getBaseUrl from "../utils/base-url";

const ourNewMeals: Array<FoodProps> = [
    {
        id: 87324,
        title: "کباب تابه‌ای",
        discount: 18,
        img: getBaseUrl() + "/images/image-1.png",
        img_1280x1080: getBaseUrl() + "/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 53000,
        rating: 4,
        commentsCount: 22,
        deliveryTime: { from: 13, to: 18 },
        categoryId: 4
    },
    {
        id: 21879,
        title: "نوشابه آبمیوه",
        discount: 6,
        img: getBaseUrl() + "/images/image-2.jpg",
        img_1280x1080: getBaseUrl() + "/images/2_1920x1080.jpg",
        isBookMarked: false,
        price: 87000,
        rating: 3,
        commentsCount: 10,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 2
    },
    {
        id: 59103,
        title: "نان خانگی",
        discount: 0,
        img: getBaseUrl() + "/images/image-3.jpg",
        img_1280x1080: getBaseUrl() + "/images/3_1920x1080.jpg",
        isBookMarked: true,
        price: 67500,
        rating: 4,
        commentsCount: 6,
        deliveryTime: { from: 11, to: 20 },
        categoryId: 6
    },
    {
        id: 40785,
        title: "برنج با ماهی",
        discount: 14,
        img: getBaseUrl() + "/images/image-4.jpg",
        img_1280x1080: getBaseUrl() + "/images/4_1920x1080.jpg",
        isBookMarked: false,
        price: 23750,
        rating: 2,
        commentsCount: 35,
        deliveryTime: { from: 10, to: 15 },
        categoryId: 10
    },
    {
        id: 91340,
        title: "سالاد فصلی",
        discount: 9,
        img: getBaseUrl() + "/images/image-5.jpg",
        img_1280x1080: getBaseUrl() + "/images/5_1920x1080.jpg",
        isBookMarked: true,
        price: 18000,
        rating: 3,
        commentsCount: 14,
        deliveryTime: { from: 12, to: 17 },
        categoryId: 8
    },
    {
        id: 83156,
        title: "آبمیوه طبیعی",
        discount: 3,
        img: getBaseUrl() + "/images/image-6.jpg",
        img_1280x1080: getBaseUrl() + "/images/6_1920x1080.jpg",
        isBookMarked: false,
        price: 112500,
        rating: 5,
        commentsCount: 30,
        deliveryTime: { from: 14, to: 20 },
        categoryId: 3
    },
    {
        id: 65280,
        title: "برگر مرغ",
        discount: 2,
        img: getBaseUrl() + "/images/image-7.jpg",
        img_1280x1080: getBaseUrl() + "/images/7_1920x1080.jpg",
        isBookMarked: true,
        price: 38500,
        rating: 4,
        commentsCount: 18,
        deliveryTime: { from: 11, to: 17 },
        categoryId: 1
    },
    {
        id: 33519,
        title: "قورمه سبزی",
        discount: 12,
        img: getBaseUrl() + "/images/image-8.jpg",
        img_1280x1080: getBaseUrl() + "/images/8_1920x1080.png",
        isBookMarked: false,
        price: 98500,
        rating: 4,
        commentsCount: 2,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 7
    },
]


export {
    ourNewMeals
}