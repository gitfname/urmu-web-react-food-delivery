
import { FoodProps } from "../types";
import getBaseUrl from "../utils/base-url";

const ourNewMeals: Array<FoodProps> = [
    {
        id: 87324,
        title: "کباب تابه ای",
        discount: 18,
        img: getBaseUrl()+"/images/image-1.png",
        isBookMarked: true,
        price: 53000,
        rating: 4,
        commentsCount: 22,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 21879,
        title: "آبغوره",
        discount: 6,
        img: getBaseUrl()+"/images/image-2.jpg",
        isBookMarked: false,
        price: 87000,
        rating: 3,
        commentsCount: 10,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 59103,
        title: "قیمه ناگت",
        discount: 0,
        img: getBaseUrl()+"/images/image-3.jpg",
        isBookMarked: true,
        price: 67500,
        rating: 4,
        commentsCount: 6,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 40785,
        title: "شیرینی نوشابه ای",
        discount: 14,
        img: getBaseUrl()+"/images/image-4.jpg",
        isBookMarked: false,
        price: 23750,
        rating: 2,
        commentsCount: 35,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 91340,
        title: "نان لواش",
        discount: 9,
        img: getBaseUrl()+"/images/image-5.jpg",
        isBookMarked: true,
        price: 18000,
        rating: 3,
        commentsCount: 14,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 83156,
        title: "کوکتل گوجه فرنگی",
        discount: 3,
        img: getBaseUrl()+"/images/image-6.jpg",
        isBookMarked: false,
        price: 112500,
        rating: 5,
        commentsCount: 30,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 65280,
        title: "بستنی زغالی",
        discount: 2,
        img: getBaseUrl()+"/images/image-7.jpg",
        isBookMarked: true,
        price: 38500,
        rating: 4,
        commentsCount: 18,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 33519,
        title: "چلو مرغ باستانی",
        discount: 12,
        img: getBaseUrl()+"/images/image-8.jpg",
        isBookMarked: false,
        price: 98500,
        rating: 4,
        commentsCount: 2,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 72946,
        title: "آب میوه هندوانه",
        discount: 7,
        img: getBaseUrl()+"/images/image-9.jpg",
        isBookMarked: true,
        price: 43000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: {
            from: 10,
            to: 20
        }
    }
]


export {
    ourNewMeals
}