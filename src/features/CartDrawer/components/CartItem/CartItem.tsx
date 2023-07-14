
import { CartItemProps as Props } from "."

function CartItem({ count, discount, img, price, title, onDecreaseClick, onIncreaseClick, id }: Props) {

  const handleOnDecreaseClick = () => onDecreaseClick && onDecreaseClick(id)

  const handleOnIncreaseClick = () => onIncreaseClick && onIncreaseClick(id)

  return (
    <div
      className="w-full flex items-center justify-between"
    >

      {/* inc & count & dec  */}
      <div className="flex items-center gap-x-2">

        <button
          onClick={handleOnDecreaseClick}
          className="w-8 h-8 appearance-none border border-rose-500/80 rounded-lg bg-transparent
          text-sm text-rose-500/80 font-[vazir]"
        >-</button>

        <p
          className="text-sm text-slate-800 font-[vazir]"
        >
          {count}
        </p>

        <button
          onClick={handleOnIncreaseClick}
          className="w-8 h-8 appearance-none border border-rose-500/80 rounded-lg bg-transparent
          text-sm text-rose-500/80 font-[vazir]"
        >+</button>

      </div>

      <div className="flex items-center gap-x-3.5">
        <div className="flex flex-col items-end gap-y-1">

          <p
            className="text-sm text-slate-900 font-[vazirMedium]"
          >
            {title}
          </p>

          <p
            className="text-xs text-slate-700 font-[vazir]"
          >
            {price} تومان
          </p>

        </div>

        <img
          alt=""
          src={img}
          className="w-16 h-16 md:w-14 md:h-14 rounded-xl object-center object-cover shadow-md shadow-black/10"
        />
      </div>


    </div>
  )
}

export default CartItem