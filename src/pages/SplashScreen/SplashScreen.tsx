
import { Box } from "@chakra-ui/react"

function SplashScreen() {
    return (
        <Box
            width="full"
            height="100vh"
            bgColor="var(--primary-color)"
        >

            <div
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
                <p
                    className="text-3xl text-gray-50 animate-fade-right delay-1000 duration-700"
                >
                    UFood
                </p>

            </div>

        </Box>
    )
}

export default SplashScreen