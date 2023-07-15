
import { FoodCategory } from "../../types"
import { foodCategories } from "../../data/foodCategories"

interface getFoodCategoriesOutPut {
    data: Array<FoodCategory>
}

async function getFoodCategories():Promise<getFoodCategoriesOutPut> {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: foodCategories
            })
        }, 1000);
    })
    // const url = ""

    // const fetchOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer your-token"
    //     },
    //     body: JSON.stringify({})
    // }

    // const res = await fetch(url, fetchOptions)

    // if(res.ok) {
    //     return await res.json()
    // }
    // else {
    //     throw new Error("something went wrong")
    // }
}

export {
    getFoodCategories
}

export type {
    getFoodCategoriesOutPut
}