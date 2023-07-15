
import { useLocation } from "react-router-dom"
import { swrConfig } from "../../SWRconfig"
import useSwr from "swr"
import { getFoodsByCategoryId } from "../../services/api"
import { FoodCard_1 } from "../../components/FoodCard_1"
import { DataSection_1 } from "../../components/DataSection_1"
import { FoodCard_1Props } from "../../types"
import { useEffect, useRef } from "react"
import { Loading_1 } from "../../components/Loading_1"

function Categories() {

  const { state } = useLocation()
  const { categoryTitle, categoryId } = state
  const pageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(
    () => {
      document.getElementById("page-container")?.scrollTo({ left: 0, top: 0, behavior: "instant" })
    },
    []
  )

  const {
    data: foodsByCategory,
    error: foodsByCategoryError,
    isLoading: isFoodsByCategoryLoading
  } = useSwr(
    swrConfig.keys.foodCategories + "/" + categoryId,
    async () => await getFoodsByCategoryId({ id: categoryId }),
    swrConfig.configs.pages.categories.getFoodsByCategory
  )


  return (
    <div ref={pageContainerRef} className="w-full h-max">

      {
        isFoodsByCategoryLoading
          ?
          <Loading_1 />
          :
          foodsByCategoryError
            ?
            <p>something went wrong</p>
            :
            <div className="w-full mt-8 pb-10">
              <DataSection_1
                title={categoryTitle}
                titleClassName="px-4 md:px-8"
                sliderClassName="!px-3 md:!px-8"
                data={foodsByCategory?.data || []}
                isSlider={false}
                dataSectionClassName="px-4 md:px-8"
                renderer={(data: FoodCard_1Props) => (
                  <div className="pb-3 px-1">
                    <FoodCard_1
                      key={data.id}
                      {...data}
                    />
                  </div>
                )}
              />
            </div>
      }
    </div>
  )
}

export default Categories