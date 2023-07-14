
import { DataSection_1 } from "../../components/DataSection_1"
import { FoodCard_1 } from "../../components/FoodCard_1"
import { FoodCategoryCard_1 } from "../../components/FoodCategoryCard_1"
import { OurFoodsInfiniteSlider } from "../../components/OurFoodsInfiniteSlider"
import { FoodCard_1Props } from "../../types"
import getBaseUrl from "../../utils/base-url"
import { AiFillFire } from "react-icons/ai"

function HomePage() {

  const ourNewMeals: Array<FoodCard_1Props> = [
    {
      id: 0,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-2.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "نایس جویس",
      price: 190000,
      discount: undefined
    },
    {
      id: 1,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-3.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "دابل برگر",
      price: 200000,
      discount: undefined
    },
    {
      id: 2,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-4.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "غذای ترکی هلال",
      price: 140000,
      discount: undefined
    },
    {
      id: 3,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-5.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "سوپر کباب",
      price: 180000,
      discount: 33
    },
    {
      id: 4,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-6.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "پیتزا ساده",
      price: 180000,
      discount: 11
    },
    {
      id: 5,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-7.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "برنج",
      price: 160000,
      discount: undefined
    }
  ]

  const ourBestMeals: Array<FoodCard_1Props> = [
    {
      id: 0,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-2.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "نایس جویس",
      price: 190000,
      discount: undefined
    },
    {
      id: 1,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-3.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "دابل برگر",
      price: 200000,
      discount: undefined
    },
    {
      id: 2,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-4.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "غذای ترکی هلال",
      price: 140000,
      discount: 10
    },
    {
      id: 3,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-5.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "سوپر کباب",
      price: 180000,
      discount: undefined
    },
    {
      id: 4,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-6.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "پیتزا ساده",
      price: 180000,
      discount: undefined
    },
    {
      id: 5,
      commentsCount: 0,
      img: getBaseUrl() + "/images/image-7.jpg",
      rating: 3,
      isBookMarked: false,
      deliveryTime: {
        from: 10,
        to: 20
      },
      title: "برنج",
      price: 180000,
      discount: undefined
    }
  ]

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


      {/* our new foods */}
      <div className="w-full mt-16">
        <DataSection_1
          title="غذاهای جدید ما"
          titleClassName="px-4 md:px-8"
          sliderClassName="!px-3 md:!px-8"
          data={ourNewMeals}
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

      {/* our new foods */}
      <div className="w-full mt-16">
        <DataSection_1
          title="بهترین غذا های ما"
          titleClassName="px-4 md:px-8"
          sliderClassName="!px-3 md:!px-8"
          data={ourBestMeals}
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