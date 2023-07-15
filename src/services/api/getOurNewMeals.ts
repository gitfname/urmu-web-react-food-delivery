
import { FoodProps } from "../../types";
import { ourNewMeals } from "../../data/our-new-foods";

interface getOurNewMealsOutPut {
    data: Array<FoodProps>
}

async function getOurNewMeals():Promise<getOurNewMealsOutPut> {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: ourNewMeals
            })
        }, 2200);
    })
    // const url = ""

    // const fetchOptions = {
    //     method: "GET",
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
    getOurNewMeals
}

export type {
    getOurNewMealsOutPut
}