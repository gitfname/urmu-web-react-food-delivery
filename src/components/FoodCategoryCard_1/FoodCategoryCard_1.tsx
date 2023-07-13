
interface Props {
  title: string;
  img: string;
}

function FoodCategoryCard_1({ img, title }: Props) {
  return (
    <div
      className="w-full aspect-square rounded-3xl overflow-hidden shadow-md shadow-black/10 relative group cursor-pointer"
    >

      <img
        alt=""
        src={img}
        className="w-full h-full object-center object-cover group-hover:scale-110
        group-hover:-rotate-3 transition-transform duration-300"
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 flex items-end z-10
      bg-gradient-to-t from-black/60 via-black/10 to-transparent">

        <p
          className="text-base text-gray-50 font-[vazirLight] truncate"
        >
          {title}
        </p>

      </div>

    </div>
  )
}

export default FoodCategoryCard_1