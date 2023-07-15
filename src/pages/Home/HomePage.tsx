
import { swrConfig } from "../../SWRconfig"
import { DataSection_1 } from "../../components/DataSection_1"
import { FoodCard_1 } from "../../components/FoodCard_1"
import { FoodCategoryCard_1 } from "../../components/FoodCategoryCard_1"
import { getOurNewMeals, getOurBestFoods } from "../../services/api"
import { getFoodCategories } from "../../services/api/getFoodCategories"
import { FoodCard_1Props } from "../../types"
import getBaseUrl from "../../utils/base-url"
import { AiFillFire } from "react-icons/ai"
import useSWR from "swr"

function HomePage() {

  const {
    data: ourNewMeals,
    error: ourNewMealsError,
    isLoading: isOurNewMealsLoading
  } = useSWR(
    swrConfig.keys.ourNewMeals,
    async () => await getOurNewMeals(),
    swrConfig.configs.pages.home.getOurNewMeals
  )

  const {
    data: ourBestMeals,
    error: ourBestMealsError,
    isLoading: isOurBestMealsLoading
  } = useSWR(
    swrConfig.keys.ourBestMeals,
    async () => await getOurBestFoods(),
    swrConfig.configs.pages.home.getOurBestMeals
  )

  const {
    data: foodCategories,
    error: foodCategoriesError,
    isLoading: isFoodCategoriesLoading
  } = useSWR(
    swrConfig.keys.foodCategories,
    async () => await getFoodCategories(),
    swrConfig.configs.pages.home.getFoodCategoories
  )

  return (
    <div className="w-full h-max pb-10">

      <img
        loading="lazy"
        alt=""
        src={getBaseUrl() + "/images/hero-bg-desktop.jpg"}
        className="w-full h-screen object-center object-cover"
      />

      {/* <OurFoodsInfiniteSlider /> */}


      {/* popular food categories */}
      <div className="w-full mt-16 px-4 md:px-8">

        <p className="text-2xl text-gray-800 font-[vazirBold] flex items-center gap-x-2">
          دسته بندی های محبوب
          <AiFillFire className="w-7 h-7 fill-rose-500" />
        </p>

        <div className="w-full mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {
            isFoodCategoriesLoading
              ?
              <p>Loading...</p>
              :
              !foodCategoriesError
              &&
              foodCategories?.data.map(item => (
                <FoodCategoryCard_1
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                />
              ))

          }
        </div>

      </div>


      {/* our new foods */}
      <div className="w-full mt-16">
        {
          isOurNewMealsLoading
            ?
            <p>loading</p>
            :
            ourNewMealsError
              ?
              <p>something went wrong</p>
              :
              <DataSection_1
                title="غذاهای جدید ما"
                titleClassName="px-4 md:px-8"
                sliderClassName="!px-3 md:!px-8"
                data={ourNewMeals?.data || []}
                renderer={(data: FoodCard_1Props) => (
                  <div className="pb-3 px-1">
                    <FoodCard_1
                      key={data.id}
                      {...data}
                    />
                  </div>
                )}
              />

        }
      </div>

      {/* our best foods */}
      <div className="w-full mt-16">
        {
          isOurBestMealsLoading
            ?
            <p>loading</p>
            :
            ourBestMealsError
              ?
              <p>something went wrong</p>
              :
              <DataSection_1
                title="بهترین غذا های ما"
                titleClassName="px-4 md:px-8"
                sliderClassName="!px-3 md:!px-8"
                data={ourBestMeals?.data || []}
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
        }
      </div>


      {/* banner-1 */}
      <div className="w-full px-4 md:px-8 mt-16">
        <img
          alt=""
          src={getBaseUrl() + "/images/banner-1.jpg"}
          className="w-full min-h-[8rem] rounded-xl shadow-md shadow-black/10 mt-16 object-center object-cover"
        />

      </div>

      <div className="w-full mt-16 px-4 md:px-8 py-20 bg-gray-100">

        <p
          className="text-2xl text-slate-800 font-[vazirMedium] text-center"
        >
          سفارش آنلاین. از بهترین فست فود ارومیه
        </p>

        <p
          className="text-sm text-slate-500 font-[vazirLight] text-center mt-2"
        >
          دنبال بهترین فست فود ارومیه هستی ؟
        </p>

        <p
          className="text-sm text-slate-500 font-[vazirLight] text-center mt-2"
        >
          میخوایی سفارشاتت قبل از اینکه سرد بشن به معده ات برسن ؟
        </p>

        <p
          className="text-sm text-slate-800 font-[vazir] text-center mt-2 leading-6"
        >
          پس دیگه دنبالش نباش. چون پیداش کردی.
          <br />
          با وب اپلیکیشن ما خیلی راحت میتونی سفارشاتت رو بدی
          <br />
          و همچنین میتونی ببینی سفارشت در حال حاضر کجا هست
        </p>

      </div>


    </div>
  )
}

export default HomePage