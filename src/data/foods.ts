
import { FoodProps } from "../types";
import getBaseUrl from "../utils/base-url";

const foods: Array<FoodProps> = [
    {
        id: 87324,
        title: "کباب تابه‌ای",
        discount: 18,
        img: getBaseUrl()+"/images/image-1.png",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-2.jpg",
        img_1280x1080: getBaseUrl()+"/images/2_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-3.jpg",
        img_1280x1080: getBaseUrl()+"/images/3_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-4.jpg",
        img_1280x1080: getBaseUrl()+"/images/4_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-5.jpg",
        img_1280x1080: getBaseUrl()+"/images/5_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-6.jpg",
        img_1280x1080: getBaseUrl()+"/images/6_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-7.jpg",
        img_1280x1080: getBaseUrl()+"/images/7_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-8.jpg",
        img_1280x1080: getBaseUrl()+"/images/8_1920x1080.png",
        isBookMarked: false,
        price: 98500,
        rating: 4,
        commentsCount: 2,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 7
    },
    {
        id: 72946,
        title: "شیرینی کریم پف",
        discount: 7,
        img: getBaseUrl()+"/images/image-9.jpg",
        img_1280x1080: getBaseUrl()+"/images/9_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-10.jpg",
        img_1280x1080: getBaseUrl()+"/images/10_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-11.jpg",
        img_1280x1080: getBaseUrl()+"/images/11_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-12.jpg",
        img_1280x1080: getBaseUrl()+"/images/12_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-13.jpg",
        img_1280x1080: getBaseUrl()+"/images/13_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-14.jpg",
        img_1280x1080: getBaseUrl()+"/images/14_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-15.jpg",
        img_1280x1080: getBaseUrl()+"/images/15_1920x1080.png",
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
        img: getBaseUrl()+"/images/image-16.jpg",
        img_1280x1080: getBaseUrl()+"/images/16_1920x1080.jpg",
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
        img: getBaseUrl()+"/images/image-17.jpg",
        img_1280x1080: getBaseUrl()+"/images/17_1920x1080.jpg",
        isBookMarked: false,
        price: 57500,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 12, to: 18 },
        categoryId: 4
    },
    {
        id: 61489,
        title: "پیتزا مخلوط",
        discount: 12,
        img: getBaseUrl()+"/images/image-18.jpg",
        img_1280x1080: getBaseUrl()+"/images/18_1920x1080.jpg",
        isBookMarked: true,
        price: 98000,
        rating: 4,
        commentsCount: 31,
        deliveryTime: { from: 10, to: 17 },
        categoryId: 1
    },
    {
        id: 32970,
        title: "سالاد سزار",
        discount: 6,
        img: getBaseUrl()+"/images/image-19.jpg",
        img_1280x1080: getBaseUrl()+"/images/19_1920x1080.jpg",
        isBookMarked: false,
        price: 42000,
        rating: 3,
        commentsCount: 14,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 8
    },
    {
        id: 78639,
        title: "قیمه نقلی",
        discount: 0,
        img: getBaseUrl()+"/images/image-20.jpg",
        img_1280x1080: getBaseUrl()+"/images/20_1920x1080.jpg",
        isBookMarked: true,
        price: 58000,
        rating: 4,
        commentsCount: 23,
        deliveryTime: { from: 11, to: 16 },
        categoryId: 6
    },
    {
        id: 75912,
        title: "قیمه دریایی",
        discount: 10,
        img: getBaseUrl()+"/images/image-21.jpg",
        img_1280x1080: getBaseUrl()+"/images/21_1920x1080.jpg",
        isBookMarked: false,
        price: 96000,
        rating: 4,
        commentsCount: 18,
        deliveryTime: { from: 12, to: 17 },
        categoryId: 5
    },
    {
        id: 14682,
        title: "صیفی جات تازه",
        discount: 0,
        img: getBaseUrl()+"/images/image-22.jpg",
        img_1280x1080: getBaseUrl()+"/images/23_1920x1080.png",
        isBookMarked: true,
        price: 35000,
        rating: 3,
        commentsCount: 4,
        deliveryTime: { from: 11, to: 19 },
        categoryId: 8
    },
    {
        id: 27943,
        title: "بستنی خرما",
        discount: 15,
        img: getBaseUrl()+"/images/image-23.jpg",
        img_1280x1080: getBaseUrl()+"/images/23_1920x1080.png",
        isBookMarked: false,
        price: 30000,
        rating: 4,
        commentsCount: 20,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 9
    },
    {
        id: 48271,
        title: "کیک وانیلی",
        discount: 5,
        img: getBaseUrl()+"/images/image-24.jpg",
        img_1280x1080: getBaseUrl()+"/images/24_1920x1080.png",
        isBookMarked: true,
        price: 38000,
        rating: 4,
        commentsCount: 13,
        deliveryTime: { from: 11, to: 18 },
        categoryId: 6
    },
    {
        id: 39420,
        title: "چلو ماهی قزل‌آلا",
        discount: 8,
        img: getBaseUrl()+"/images/image-25.jpg",
        img_1280x1080: getBaseUrl()+"/images/25_1920x1080.jpeg",
        isBookMarked: false,
        price: 65000,
        rating: 3,
        commentsCount: 16,
        deliveryTime: { from: 12, to: 20 },
        categoryId: 4
    },
    {
        id: 18735,
        title: "نوشابه گازدار",
        discount: 0,
        img: getBaseUrl()+"/images/image-26.jpg",
        img_1280x1080: getBaseUrl()+"/images/26_1920x1080.png",
        isBookMarked: true,
        price: 21000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 10, to: 15 },
        categoryId: 2
    },
    {
        id: 94312,
        title: "خوراک مرغ سبزی",
        discount: 12,
        img: getBaseUrl()+"/images/image-27.jpg",
        img_1280x1080: getBaseUrl()+"/images/27_1920x1080.jpg",
        isBookMarked: true,
        price: 67000,
        rating: 4,
        commentsCount: 27,
        deliveryTime: { from: 13, to: 19 },
        categoryId: 7
    },
    {
        id: 59187,
        title: "سالاد خرما",
        discount: 3,
        img: getBaseUrl()+"/images/image-28.jpg",
        img_1280x1080: getBaseUrl()+"/images/28_1920x1080.jpg",
        isBookMarked: false,
        price: 48000,
        rating: 3,
        commentsCount: 15,
        deliveryTime: { from: 11, to: 17 },
        categoryId: 8
    },
    {
        id: 32067,
        title: "سوپ یونانی",
        discount: 10,
        img: getBaseUrl()+"/images/image-29.jpg",
        img_1280x1080: getBaseUrl()+"/images/29_1920x1080.jpg",
        isBookMarked: true,
        price: 42000,
        rating: 4,
        commentsCount: 32,
        deliveryTime: { from: 12, to: 20 },
        categoryId: 5
    },
    {
        id: 62784,
        title: "شیرینی قندی",
        discount: 6,
        img: getBaseUrl()+"/images/image-30.jpg",
        img_1280x1080: getBaseUrl()+"/images/30_1920x1080.jpg",
        isBookMarked: false,
        price: 28000,
        rating: 3,
        commentsCount: 11,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 9
    },
    {
        id: 83074,
        title: "ساندویچ گوجه‌فرنگی",
        discount: 7,
        img: getBaseUrl()+"/images/image-31.jpg",
        img_1280x1080: getBaseUrl()+"/images/31_1920x1080.jpeg",
        isBookMarked: true,
        price: 42000,
        rating: 3,
        commentsCount: 18,
        deliveryTime: { from: 12, to: 20 },
        categoryId: 1
    },
    {
        id: 54268,
        title: "ماست و هویج",
        discount: 0,
        img: getBaseUrl()+"/images/image-32.jpg",
        img_1280x1080: getBaseUrl()+"/images/32_1920x1080.png",
        isBookMarked: false,
        price: 28000,
        rating: 2,
        commentsCount: 6,
        deliveryTime: { from: 10, to: 15 },
        categoryId: 8
    },
    {
        id: 91023,
        title: "برگر مخصوص",
        discount: 12,
        img: getBaseUrl()+"/images/image-33.jpg",
        img_1280x1080: getBaseUrl()+"/images/33_1920x1080.png",
        isBookMarked: true,
        price: 55000,
        rating: 4,
        commentsCount: 28,
        deliveryTime: { from: 11, to: 17 },
        categoryId: 1
    },
    {
        id: 34809,
        title: "شیربرنج",
        discount: 8,
        img: getBaseUrl()+"/images/image-34.jpg",
        img_1280x1080: getBaseUrl()+"/images/34_1920x1080.png",
        isBookMarked: false,
        price: 32000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 10, to: 18 },
        categoryId: 3
    },
    {
        id: 67549,
        title: "میرزا قاسمی",
        discount: 5,
        img: getBaseUrl()+"/images/image-35.jpg",
        img_1280x1080: getBaseUrl()+"/images/35_1920x1080.png",
        isBookMarked: true,
        price: 65000,
        rating: 4,
        commentsCount: 16,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 7
    },
    {
        id: 26135,
        title: "آلبالو ترش",
        discount: 0,
        img: getBaseUrl()+"/images/image-36.jpg",
        img_1280x1080: getBaseUrl()+"/images/36_1920x1080.jpg",
        isBookMarked: false,
        price: 23000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: { from: 11, to: 16 },
        categoryId: 2
    },
    {
        id: 79957,
        title: "ماکارونی پنج‌رنگ",
        discount: 12,
        img: getBaseUrl()+"/images/image-37.jpg",
        img_1280x1080: getBaseUrl()+"/images/37_1920x1080.jpg",
        isBookMarked: true,
        price: 38000,
        rating: 3,
        commentsCount: 24,
        deliveryTime: { from: 12, to: 20 },
        categoryId: 6
    },
    {
        id: 48264,
        title: "سالاد تونو",
        discount: 3,
        img: getBaseUrl()+"/images/image-38.jpg",
        img_1280x1080: getBaseUrl()+"/images/38_1920x1080.jpg",
        isBookMarked: false,
        price: 45000,
        rating: 3,
        commentsCount: 13,
        deliveryTime: { from: 11, to: 18 },
        categoryId: 8
    },
    {
        id: 93840,
        title: "کیک شکلاتی",
        discount: 15,
        img: getBaseUrl()+"/images/image-39.jpg",
        img_1280x1080: getBaseUrl()+"/images/39_1920x1080.jpg",
        isBookMarked: true,
        price: 57000,
        rating: 4,
        commentsCount: 30,
        deliveryTime: { from: 13, to: 19 },
        categoryId: 9
    },
    {
        id: 67942,
        title: "مرغ بریان",
        discount: 6,
        img: getBaseUrl()+"/images/image-40.jpg",
        img_1280x1080: getBaseUrl()+"/images/40_1920x1080.jpg",
        isBookMarked: false,
        price: 67000,
        rating: 4,
        commentsCount: 11,
        deliveryTime: { from: 10, to: 17 },
        categoryId: 4
    },
    {
        id: 12345,
        title: "شیرینی پسته",
        discount: 10,
        img: getBaseUrl()+"/images/image-41.jpg",
        img_1280x1080: getBaseUrl()+"/images/41_1920x1080.jpg",
        isBookMarked: true,
        price: 45000,
        rating: 4,
        commentsCount: 20,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 9
    },
    {
        id: 23456,
        title: "ساندویچ مرغ و سبزیجات",
        discount: 15,
        img: getBaseUrl()+"/images/image-42.jpg",
        img_1280x1080: getBaseUrl()+"/images/42_1920x1080.jpg",
        isBookMarked: false,
        price: 35000,
        rating: 3,
        commentsCount: 12,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 1
    },
    {
        id: 34567,
        title: "استیک تن ماهی",
        discount: 0,
        img: getBaseUrl()+"/images/image-43.jpg",
        img_1280x1080: getBaseUrl()+"/images/43_1920x1080.jpg",
        isBookMarked: false,
        price: 90000,
        rating: 4,
        commentsCount: 14,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 4
    },
    {
        id: 45678,
        title: "پیتزا سبزیجات",
        discount: 8,
        img: getBaseUrl()+"/images/image-44.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 60000,
        rating: 4,
        commentsCount: 21,
        deliveryTime: { from: 11, to: 18 },
        categoryId: 1
    },
    {
        id: 56789,
        title: "غذای پلویی",
        discount: 0,
        img: getBaseUrl()+"/images/image-45.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 50000,
        rating: 3,
        commentsCount: 10,
        deliveryTime: { from: 12, to: 17 },
        categoryId: 5
    },
    {
        id: 67890,
        title: "سالاد مخصوص",
        discount: 20,
        img: getBaseUrl()+"/images/image-46.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 30000,
        rating: 4,
        commentsCount: 18,
        deliveryTime: { from: 14, to: 20 },
        categoryId: 8
    },
    {
        id: 78901,
        title: "کیک پرتقالی",
        discount: 4,
        img: getBaseUrl()+"/images/image-47.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 38000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 11, to: 18 },
        categoryId: 9
    },
    {
        id: 89012,
        title: "کباب کوبیده مخصوص",
        discount: 12,
        img: getBaseUrl()+"/images/image-48.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 70000,
        rating: 4,
        commentsCount: 24,
        deliveryTime: { from: 10, to: 17 },
        categoryId: 6
    },
    {
        id: 90123,
        title: "نوشابه آب میوه هلو",
        discount: 6,
        img: getBaseUrl()+"/images/image-49.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 25000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 2
    },
    {
        id: 10234,
        title: "شیرینی خرما",
        discount: 0,
        img: getBaseUrl()+"/images/image-50.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 18000,
        rating: 3,
        commentsCount: 11,
        deliveryTime: { from: 11, to: 16 },
        categoryId: 9
    },
    {
        id: 101,
        title: "ساندویچ مرغ و آووکادو",
        discount: 10,
        img: getBaseUrl()+"/images/image-51.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 42000,
        rating: 4,
        commentsCount: 15,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 1
    },
    {
        id: 102,
        title: "سیب زمینی سرخ‌کرده",
        discount: 0,
        img: getBaseUrl()+"/images/image-52.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 25000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 8
    },
    {
        id: 103,
        title: "لازانیا مخصوص",
        discount: 15,
        img: getBaseUrl()+"/images/image-53.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 45000,
        rating: 4,
        commentsCount: 20,
        deliveryTime: { from: 11, to: 18 },
        categoryId: 1
    },
    {
        id: 104,
        title: "آش ماش",
        discount: 8,
        img: getBaseUrl()+"/images/image-54.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 32000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: { from: 10, to: 18 },
        categoryId: 3
    },
    {
        id: 105,
        title: "آبمیوه ترش‌ها",
        discount: 0,
        img: getBaseUrl()+"/images/image-55.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 23000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: { from: 11, to: 16 },
        categoryId: 2
    },
    {
        id: 106,
        title: "شیش کباب مخصوص",
        discount: 12,
        img: getBaseUrl()+"/images/image-56.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 60000,
        rating: 4,
        commentsCount: 26,
        deliveryTime: { from: 12, to: 19 },
        categoryId: 4
    },
    {
        id: 107,
        title: "سالاد پسته و هویج",
        discount: 3,
        img: getBaseUrl()+"/images/image-57.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 48000,
        rating: 3,
        commentsCount: 14,
        deliveryTime: { from: 11, to: 17 },
        categoryId: 8
    },
    {
        id: 108,
        title: "کلوچه شکلاتی",
        discount: 15,
        img: getBaseUrl()+"/images/image-58.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: true,
        price: 55000,
        rating: 4,
        commentsCount: 32,
        deliveryTime: { from: 13, to: 20 },
        categoryId: 9
    },
    {
        id: 109,
        title: "پیتزا مخلوط",
        discount: 6,
        img: getBaseUrl()+"/images/image-59.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 70000,
        rating: 4,
        commentsCount: 18,
        deliveryTime: { from: 12, to: 20 },
        categoryId: 6
    },
    {
        id: 110,
        title: "نون الویه",
        discount: 6.5,
        img: getBaseUrl()+"/images/image-60.jpg",
        img_1280x1080: getBaseUrl()+"/images/1_1920x1080.jpg",
        isBookMarked: false,
        price: 28000,
        rating: 3,
        commentsCount: 12,
        deliveryTime: { from: 10, to: 16 },
        categoryId: 2
    }
]



function getFoodsByCategory(id: number): Array<FoodProps> {
    return foods.filter(food => food.categoryId === id)
}

function getFoodById(id: number): FoodProps | undefined {
    return foods.find(food => food.id === id)
}

export {
    foods,
    getFoodsByCategory as getFoodsByCategory_dataFn,
    getFoodById as getFoodById_dataFn
}