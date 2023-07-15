
import { useLocation, useParams } from "react-router-dom"
import { FoodProps } from "../../types"
import useSWR from "swr"
import { getFoodById } from "../../services/api"
import { swrConfig } from "../../SWRconfig"
import { Loading_1 } from "../../components/Loading_1"
import { Rating } from "../../components/Rating"


function SingleFoodPage() {

    const { id } = useParams()

    const {
        data: foodData,
        error: foodError,
        isLoading: isFoodDataLoading,
    } = useSWR(
        swrConfig.keys.getSingleFood + "/" + id,
        async () => await getFoodById(parseInt(id)),
        swrConfig.configs.pages.singleFood.getSingleFood
    )

    if (isFoodDataLoading) return <Loading_1 />
    if (foodError) return <p>something went wrong</p>

    return (
        <div className="w-full h-max pb-10">

            <img
                alt=""
                src={foodData?.data?.img_1280x1080}
                className="w-full h-screen  shadow-md shadow-black/10 object-center object-cover"
            />

            <p className="text-3xl font-[vazirMedium] text-slate-700 mt-5 px-4 md:px-8 text-center">
                {foodData?.data?.title}
            </p>

            <div className="mt-3.5 w-max mx-auto">
                <Rating total={5} value={foodData?.data?.rating || 0} />
            </div>

            <p
                className="text-base text-slate-700/90 font-[vazirMedium] text-center mt-3.5"
            >
                {foodData?.data?.deliveryTime.from} تا {foodData?.data?.deliveryTime.to} دقیقه
            </p>
            <p
                className="text-xs font-[vazir] mt-0.5 text-center text-slate-500"
            >
                میانگین زمان ارسال
            </p>

        </div>
    )
}

export default SingleFoodPage