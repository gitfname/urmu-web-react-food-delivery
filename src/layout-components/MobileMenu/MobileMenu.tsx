
import {
    Drawer,
    IconButton,
} from "@material-tailwind/react"
import {
    XMarkIcon,
    Bars3Icon
} from "@heroicons/react/24/outline";
import { useDisclosure } from "@chakra-ui/react"

function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton variant="text" size="sm" className="bg-blue-500/5" onClick={onOpen}>
                <Bars3Icon strokeWidth={1.5} className="w-4 h-4" />
            </IconButton>
        
            <Drawer
                open={isOpen}
                onClose={onClose}
            >
                <div className="flex justify-end py-3 px-3 pb-6">
                    <IconButton size="sm" onClick={onClose} variant="text">
                        <XMarkIcon strokeWidth={1.5} className="w-4 h-4" />
                    </IconButton>
                </div>
            </Drawer>
        </>
    )
}

export default MobileMenu