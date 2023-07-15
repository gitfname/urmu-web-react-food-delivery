
import { FoodProps } from "../types"
import getBaseUrl from "../utils/base-url"

const ourBestFoods: Array<FoodProps> = [
    {
        id: 72946,
        title: "شیرینی کریم پف",
        discount: 7,
        img: getBaseUrl() + "/images/image-9.jpg",
        img_1280x1080: getBaseUrl() + "/images/9_1920x1080.png",
        isBookMarked: true,
        price: 43000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 12, to: 20 },
        categoryId: 9
    },
    {
        id: 10437,
        title: "سوپ جو",
        discount: 5,
        img: getBaseUrl() + "/images/image-10.jpg",
        img_1280x1080: getBaseUrl() + "/images/10_1920x1080.png",
        isBookMarked: false,
        price: 52000,
        rating: 5,
        commentsCount: 33,
        deliveryTime: { from: 15, to: 19 },
        categoryId: 5
    },
    {
        id: 90216,
        title: "آبلیمو تازه",
        discount: 10,
        img: getBaseUrl() + "/images/image-11.jpg",
        img_1280x1080: getBaseUrl() + "/images/11_1920x1080.png",
        isBookMarked: true,
        price: 78000,
        rating: 4,
        commentsCount: 20,
        deliveryTime: { from: 11, to: 19 },
        categoryId: 3
    },
    {
        id: 30481,
        title: "کیک تیرامیسو",
        discount: 15,
        img: getBaseUrl() + "/images/image-12.jpg",
        img_1280x1080: getBaseUrl() + "/images/12_1920x1080.png",
        isBookMarked: false,
        price: 95000,
        rating: 4,
        commentsCount: 12,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 9
    },
    {
        id: 61739,
        title: "ساندویچ گوشت",
        discount: 0,
        img: getBaseUrl() + "/images/image-13.jpg",
        img_1280x1080: getBaseUrl() + "/images/13_1920x1080.png",
        isBookMarked: false,
        price: 30000,
        rating: 3,
        commentsCount: 6,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 1
    },
    {
        id: 83625,
        title: "لواشک خشکبار",
        discount: 8,
        img: getBaseUrl() + "/images/image-14.jpg",
        img_1280x1080: getBaseUrl() + "/images/14_1920x1080.png",
        isBookMarked: true,
        price: 62000,
        rating: 4,
        commentsCount: 24,
        deliveryTime: { from: 11, to: 18 },
        categoryId: 10
    },
    {
        id: 15372,
        title: "چای ترش برگ",
        discount: 0,
        img: getBaseUrl() + "/images/image-15.jpg",
        img_1280x1080: getBaseUrl() + "/images/15_1920x1080.png",
        isBookMarked: false,
        price: 25000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: { from: 10, to: 15 },
        categoryId: 2
    },
    {
        id: 73641,
        title: "کیک کارامل",
        discount: 20,
        img: getBaseUrl() + "/images/image-16.jpg",
        img_1280x1080: getBaseUrl() + "/images/16_1920x1080.jpg",
        isBookMarked: true,
        price: 69000,
        rating: 4,
        commentsCount: 17,
        deliveryTime: { from: 14, to: 20 },
        categoryId: 9
    },
    {
        id: 90245,
        title: "هویج پلو با مرغ",
        discount: 4,
        img: getBaseUrl() + "/images/image-17.jpg",
        img_1280x1080: getBaseUrl() + "/images/17_1920x1080.jpg",
        isBookMarked: false,
        price: 57500,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 12, to: 18 },
        categoryId: 4
    },
]

export {
    ourBestFoods
}