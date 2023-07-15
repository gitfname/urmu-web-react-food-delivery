
import { getFoodById_dataFn } from "../../data/foods";
import { FoodProps } from "../../types"

interface getFoodByIdOutPut {
    data: FoodProps | undefined
}

async function getFoodById(id: number):Promise<getFoodByIdOutPut> {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: getFoodById_dataFn(id)
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
    getFoodById
}

export type {
    getFoodByIdOutPut
}