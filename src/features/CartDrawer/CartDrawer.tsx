
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

// stores
import { useCartDrawerStore } from '../../stores/CartDrawer'
import { useCartStore } from '../../stores/Cart'
import { CartItem } from './components/CartItem'

function CartDrawer() {

    const [isOpen, setIsOpen] = useCartDrawerStore(selector => [selector.isOpen, selector.setIsOpen])
    const [totalPrice, cartItems, removeItemById, addNewItem] = useCartStore(selector => [selector.data.totalPrice, selector.data.items, selector.api.removeItemById, selector.api.addNewItem])

    return (
        <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size="sm"
            placement='left'
        >
            <DrawerOverlay />

            <DrawerContent dir='ltr' pt="3rem">

                <DrawerCloseButton />

                <DrawerBody>
                    <div className='flex flex-col gap-y-8'>

                        {
                            cartItems
                                ?
                                cartItems.map(cartItem => (
                                    <CartItem
                                        count={cartItem.count || 1}
                                        id={cartItem.id}
                                        img={cartItem.img}
                                        title={cartItem.title}
                                        price={cartItem.price}
                                        discount={0}
                                        onDecreaseClick={id => {
                                            removeItemById(id)
                                        }}
                                        onIncreaseClick={id => {
                                            const item = cartItems.find(v => v.id === id)
                                            if (item) {
                                                addNewItem({
                                                    id: id,
                                                    img: item.img,
                                                    price: item.price,
                                                    title: item.title,
                                                    count: item?.count
                                                })
                                            }
                                        }}
                                    />
                                ))
                                :
                                null
                        }

                        <div className='flex items-center justify-between pt-4 pb-8 border-t border-t-gray-300'>

                            <p className='text-sm text-slate-900 font-[vazirMedium]'>{totalPrice}</p>

                            <p className='text-sm text-slate-900 font-[vazirMedium]'>هزینه کل</p>

                        </div>

                    </div>
                </DrawerBody>

                <DrawerFooter shadow="0px 0px 10px rgba(0,0,0,0.1)">

                    <button className='primary-btn w-11/12 mx-auto'>
                        خرید
                    </button>

                </DrawerFooter>

            </DrawerContent>

        </Drawer>
    )
}

export default CartDrawer