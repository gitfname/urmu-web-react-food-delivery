
import { FoodProps } from "../../types";
import { getFoodsByCategory_dataFn } from "../../data/foods";

interface getFoodsByCategoryIdProps {
    id: number;
}

interface getFoodsByCategoryIdOutPut {
    data: Array<FoodProps>
}

async function getFoodsByCategoryId({ id }: getFoodsByCategoryIdProps):Promise<getFoodsByCategoryIdOutPut> {
    return new Promise(resolve => (
        setTimeout(() => {
            resolve({
                data: getFoodsByCategory_dataFn(id)
            })
        }, 3000)
    ))
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
    getFoodsByCategoryId
}

export type {
    getFoodsByCategoryIdOutPut
}