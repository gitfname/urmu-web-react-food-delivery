
import { Link, useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../routes";

interface Props {
  id: number;
  title: string;
  img: string;
}

function FoodCategoryCard_1({ img, title, id }: Props) {

  const navigate = useNavigate()
  
  return (
    <button
    onClick={() => navigate(ApplicationRoutes.pages.category(id), {state: { categoryTitle: title, categoryId: id} })}
      className="w-full appearance-none block aspect-square rounded-3xl overflow-hidden shadow-md shadow-black/10 relative group cursor-pointer"
    >

      <img
        alt=""
        src={img}
        loading="lazy"
        className="w-full h-full object-center object-cover group-hover:scale-110
        group-hover:-rotate-3 transition-transform duration-300"
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 flex items-end z-10
      bg-gradient-to-t from-black/30 via-black/20 to-transparent">

        <p
          className="text-lg md:text-base text-gray-50 font-[vazir] truncate"
        >
          {title}
        </p>

      </div>

    </button>
  )
}

export default FoodCategoryCard_1