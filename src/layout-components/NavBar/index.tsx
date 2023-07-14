
import { Link } from "react-router-dom"
import { MobileMenu } from "../MobileMenu"
import { BsCart2 } from "react-icons/bs"
import { useCartStore } from "../../stores/Cart"
import { useCartDrawerStore } from "../../stores/CartDrawer"

function NavBar() {

    const [ itemsCount ] = useCartStore(selector => [selector.api.itemsCount])
    const [ setIsCartDrawerOpen ] = useCartDrawerStore(selector => [selector.setIsOpen])

    return (
        <div className="w-full flex items-center justify-between px-4 md:px-8 h-full">

            <Link to="/">Logo</Link>

            <button
                className="py-2.5 px-4 rounded-lg bg-[--primary-color-dark] appearance-none
                active:scale-95 duration-300 transition-transform text-sm font-[vazir] text-gray-50 flex items-center
                gap-x-2"
                onClick={() => setIsCartDrawerOpen(true)}
            >
                {itemsCount()}
                <BsCart2 className="w-5 h-5 fill-gray-50" />
            </button>

            <div className="lg:hidden">
                <MobileMenu />
            </div>

        </div>
    )
}

export default NavBar