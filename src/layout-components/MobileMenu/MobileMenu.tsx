
import {
    Bars3Icon
} from "@heroicons/react/24/outline";
import {
    useDisclosure,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody
} from "@chakra-ui/react"

function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                colorScheme="teal"
                onClick={onOpen}
                size="sm"
            >
                <Bars3Icon strokeWidth={2} className="w-4 h-4 text-gray-50" />
            </Button>

            <Drawer
                size="xs"
                placement="left"
                isOpen={isOpen}
                onClose={onClose}
            >

                <DrawerOverlay />
                
                <DrawerContent>

                    <DrawerCloseButton />

                    <DrawerHeader
                        textAlign="center"
                    >
                        UFood
                    </DrawerHeader>

                    <DrawerBody>
                        <p>hello world</p>
                    </DrawerBody>

                </DrawerContent>

            </Drawer>
        </>
    )
}

export default MobileMenu