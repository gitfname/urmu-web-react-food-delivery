import { ourBestFoods } from "../../data/our-best-foods";
import { FoodProps } from "../../types"

interface getOurBestFoodsOutPut {
    data: Array<FoodProps>
}

async function getOurBestFoods():Promise<getOurBestFoodsOutPut> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: ourBestFoods
            })
        }, 1800);
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
    getOurBestFoods
}

export type {
    getOurBestFoodsOutPut
}