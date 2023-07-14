
import { AiOutlineHeart } from "react-icons/ai"
import { FoodCard_1Props as Props } from "../../types"
import { Rating } from "../Rating"
import { useCartStore } from "../../stores/Cart"

function FoodCard_1({ id, commentsCount, deliveryTime, img, isBookMarked, rating, title, price, discount }: Props) {

    const [ addnewItem, removeItemById ] = useCartStore(selector => [selector.api.addNewItem, selector.api.removeItemById])

    const handleOnDecreaseClick = () => {
        removeItemById(id)
    }

    const handleOnIncreaseClick = () => {
        addnewItem({
            id: id,
            img: img,
            price: price,
            title: title
        })
    }

    return (
        <div
            dir="rtl"
            className="w-full h-full rounded-xl overflow-hidden border border-slate-300/50
            border-t-transparent shadow-md shadow-black/5 relative pb-3"
        >

            <img
                alt=""
                src={img}
                className="w-full aspect-[16/9] object-center object-cover shadow-md shadow-black/10"
            />

            {/* discount */}
            {
                typeof discount !== "undefined"
                    ?
                    <p className="rounded-tl-sm rounded-2xl bg-rose-600 p-2 px-2.5 absolute top-3 left-3
                    text-sm text-gray-50 font-[vazir] shadow-md shadow-black/10">
                        {discount}%
                    </p>
                    :
                    null
            }

            {/* is bookmarked */}
            <button
                className="appearance-none absolute top-3 right-3 p-1.5 bg-transparent/30
                backdrop-blur-sm rounded-lg shadow-md shadow-black/10"
            >
                <AiOutlineHeart className="w-5 h-5 fill-gray-50" />
            </button>

            <div
                className="p-2 pt-7 relative z-20"
            >

                <div className="py-2 flex flex-col items-center justify-center px-7 rounded-3xl shadow-md bg-gray-50 shadow-black/10 absolute top-0 left-3 -translate-y-1/2 z-20">
                    <p
                        className="text-xs leading-none text-slate-800 font-[vazirMedium]"
                    >
                        {deliveryTime.from} - {deliveryTime.to}
                    </p>
                    <p className="text-xs leading-none mt-0.5 text-slate-800 font-[vazir] text-center">دقیقه</p>
                </div>

                <p
                    className="text-base text-slate-900 font-[vazirMedium] line-clamp-2"
                >
                    {title}
                </p>

                <p
                    className="text-sm mt-1.5 text-red-500 font-[vazir] line-clamp-2 flex items-center gap-x-1.5"
                >
                    {price} تومان
                </p>

                <div className="flex items-center justify-between mt-6">

                    <div
                        className="flex items-center gap-x-1"
                    >

                        <button onClick={handleOnIncreaseClick} className="primary-btn w-9 h-9 md:w-8 md:h-8 rounded-lg relative">
                            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">+</span>
                        </button>
                        <button onClick={handleOnDecreaseClick} className="primary-btn w-9 h-9 md:w-8 md:h-8 rounded-lg relative">
                            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">-</span>
                        </button>

                    </div>

                    <div className="flex flex-col items-end justify-end">
                        <p className="text-xs text-slate-700 font-[vazirLight] w-max">
                            ( {commentsCount} نفر )
                        </p>
                        <Rating className="mt-2" total={5} value={3} />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default FoodCard_1