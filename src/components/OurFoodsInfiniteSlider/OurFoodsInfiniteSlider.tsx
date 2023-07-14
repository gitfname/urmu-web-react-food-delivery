
function OurFoodsInfiniteSlider() {

    return (
        <div dir="ltr" className="w-full overflow-x-hidden border border-red-400">

            <div className="w-max flex items-center justify-around gap-x-4 scroll-from-100-to-negative-100">

                {Array.from({ length: 13 }).map((_, i) => <div className="w-20 h-28 bg-red-200 grid place-items-center">{i}</div>)}

            </div>

        </div>
    )
}

export default OurFoodsInfiniteSlider