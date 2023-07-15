import { FoodProps } from "../types";
import getBaseUrl from "../utils/base-url";

const foods: Array<FoodProps> = [
    {
        id: 87324,
        title: "کباب تابه ای",
        discount: 18,
        img: "",
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
        img: "",
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
        img: "",
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
        img: "",
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
        img: "",
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
        img: "",
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
        img: "",
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
        img: "",
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
        img: "",
        isBookMarked: true,
        price: 43000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 10437,
        title: "دسته گل سرخ",
        discount: 5,
        img: "",
        isBookMarked: false,
        price: 52000,
        rating: 5,
        commentsCount: 33,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 19285,
        title: "شیربرنج",
        discount: 20,
        img: "",
        isBookMarked: false,
        price: 58000,
        rating: 4,
        commentsCount: 12,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 34627,
        title: "آبمیوه پرتقال",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 30000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 50318,
        title: "کیک بادام و خرما",
        discount: 15,
        img: "",
        isBookMarked: false,
        price: 95000,
        rating: 4,
        commentsCount: 5,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 75842,
        title: "قیمه بادمجان",
        discount: 8,
        img: "",
        isBookMarked: true,
        price: 67500,
        rating: 4,
        commentsCount: 25,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 97243,
        title: "کاکتوس پرتقالی",
        discount: 0,
        img: "",
        isBookMarked: false,
        price: 42000,
        rating: 2,
        commentsCount: 0,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 61597,
        title: "چیپس بادام زمینی",
        discount: 10,
        img: "",
        isBookMarked: true,
        price: 18000,
        rating: 3,
        commentsCount: 15,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 82914,
        title: "کباب برگ",
        discount: 4,
        img: "",
        isBookMarked: false,
        price: 78000,
        rating: 5,
        commentsCount: 33,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 14259,
        title: "آب نبات",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 24000,
        rating: 3,
        commentsCount: 7,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 70013,
        title: "کیک شکلاتی",
        discount: 18,
        img: "",
        isBookMarked: false,
        price: 55000,
        rating: 4,
        commentsCount: 20,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 47836,
        title: "کنسرو ماهی تن ماهیان دریایی",
        discount: 22,
        img: "",
        isBookMarked: true,
        price: 115000,
        rating: 4,
        commentsCount: 38,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 20223,
        title: "سالاد افتابگردان",
        discount: 3,
        img: "",
        isBookMarked: false,
        price: 49000,
        rating: 4,
        commentsCount: 17,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 39842,
        title: "صیفی کوبیده",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 75000,
        rating: 3,
        commentsCount: 9,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 59268,
        title: "چای سیاه",
        discount: 0,
        img: "",
        isBookMarked: false,
        price: 35000,
        rating: 3,
        commentsCount: 5,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 78831,
        title: "پیتزا مخصوص",
        discount: 15,
        img: "",
        isBookMarked: true,
        price: 98000,
        rating: 4,
        commentsCount: 26,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 95403,
        title: "چلو کباب برگ",
        discount: 10,
        img: "",
        isBookMarked: false,
        price: 65000,
        rating: 4,
        commentsCount: 20,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 62317,
        title: "آلوچه بهاری",
        discount: 8,
        img: "",
        isBookMarked: true,
        price: 32000,
        rating: 2,
        commentsCount: 11,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 83984,
        title: "کنسرو ماهی تن ماهیان آبهای تلخ",
        discount: 20,
        img: "",
        isBookMarked: true,
        price: 110000,
        rating: 4,
        commentsCount: 35,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 17652,
        title: "ارده",
        discount: 0,
        img: "",
        isBookMarked: false,
        price: 18000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 60219,
        title: "شیرینی موزی",
        discount: 5,
        img: "",
        isBookMarked: true,
        price: 42000,
        rating: 4,
        commentsCount: 19,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 93278,
        title: "چای سبز",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 30000,
        rating: 3,
        commentsCount: 11,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 11231,
        title: "کنسرو لوبیا چیتی",
        discount: 10,
        img: "",
        isBookMarked: false,
        price: 45000,
        rating: 4,
        commentsCount: 15,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 21128,
        title: "قهوه اسپرسو",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 29000,
        rating: 3,
        commentsCount: 8,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 34762,
        title: "تیغه کباب",
        discount: 5,
        img: "",
        isBookMarked: false,
        price: 59000,
        rating: 4,
        commentsCount: 12,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 49277,
        title: "شوربای لوبیا سبز",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 38000,
        rating: 3,
        commentsCount: 6,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 53614,
        title: "بستنی آلبالویی",
        discount: 8,
        img: "",
        isBookMarked: true,
        price: 27000,
        rating: 2,
        commentsCount: 10,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 65102,
        title: "زرشک پلو",
        discount: 0,
        img: "",
        isBookMarked: false,
        price: 55000,
        rating: 4,
        commentsCount: 18,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 70389,
        title: "چای کرک",
        discount: 15,
        img: "",
        isBookMarked: true,
        price: 32000,
        rating: 3,
        commentsCount: 14,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 82746,
        title: "پیتزا ناپلیتان",
        discount: 12,
        img: "",
        isBookMarked: false,
        price: 78000,
        rating: 5,
        commentsCount: 30,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 93205,
        title: "شکلات تلخ",
        discount: 0,
        img: "",
        isBookMarked: true,
        price: 25000,
        rating: 4,
        commentsCount: 9,
        deliveryTime: {
            from: 10,
            to: 20
        }
    },
    {
        id: 10185,
        title: "مرغ پخته",
        discount: 0,
        img: "",
        isBookMarked: false,
        price: 40000,
        rating: 3,
        commentsCount: 5,
        deliveryTime: {
            from: 10,
            to: 20
        }
    }
]

export {
    foods
}