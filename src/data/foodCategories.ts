
import { FoodCategory } from "../types";
import getBaseUrl from "../utils/base-url";

const foodCategories: Array<FoodCategory> = [
    { id: 1, img: getBaseUrl() + '/images/sandwich.jpg', title: "ساندویچ" },
    { id: 2, img: getBaseUrl() + '/images/kebab.jpg', title: "کباب" },
    { id: 3, img: getBaseUrl() + '/images/pizza.jpg', title: "پیتزا" },
    { id: 4, img: getBaseUrl() + '/images/stick.jpg', title: "استیک" },
    { id: 5, img: getBaseUrl() + '/images/breakfast.jpg', title: "صبحانه" },
    { id: 6, img: getBaseUrl() + '/images/salad.jpg', title: "سالاد" },
    { id: 7, img: getBaseUrl() + '/images/soup.jpg', title: "سوپ" },
    { id: 8, img: getBaseUrl() + '/images/iranian-food.jpg', title: "غذا های ایرانی" },
    { id: 9, img: getBaseUrl() + '/images/pasta.jpg', title: "پاستا" },
    { id: 10, img: getBaseUrl() + '/images/fried.jpg', title: "سوخاری" }
]

export {
    foodCategories
}