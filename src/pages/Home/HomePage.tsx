
import { FoodCategoryCard_1 } from "../../components/FoodCategoryCard_1"
import getBaseUrl from "../../utils/base-url"
import { AiFillFire } from "react-icons/ai"

function HomePage() {
  return (
    <div className="w-full h-max pb-10">

      <img
        loading="lazy"
        alt=""
        src={getBaseUrl()+"/public/images/hero-bg-desktop.jpg"}
        className="w-full h-screen object-center object-cover"
      />

      <div className="w-full mt-16 px-4 md:px-8">

        <p className="text-2xl text-gray-800 font-[vazirBold] flex items-center gap-x-2">
          دسته بندی های محبوب
          <AiFillFire className="w-7 h-7 fill-rose-500" />
        </p>

        <div className="w-full mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/iranian-food.jpg'}
            title="غذای ایرانی"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/sandwich.jpg'}
            title="ساندویچ"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/soup.jpg'}
            title="سوپ"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/kebab.jpg'}
            title="کباب"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/pizza.jpg'}
            title="پیتزا"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/stick.jpg'}
            title="استیک"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/breakfast.jpg'}
            title="صبحانه"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/salad.jpg'}
            title="سالاد"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/pasta.jpg'}
            title="پاستا"
          />

          <FoodCategoryCard_1
            img={getBaseUrl() + '/images/fried.jpg'}
            title="سوخاری"
          />
        </div>

      </div>

    </div>
  )
}

export default HomePage