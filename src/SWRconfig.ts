
import { SWRConfiguration } from "swr"

const keys = {
    ourNewMeals: "/our-new-meals",
    ourBestMeals: "/our-best-meals",
    foodCategories: "/food-categories"
}


interface configProps {
    pages: {
        home: {
            getOurNewMeals: SWRConfiguration,
            getOurBestMeals: SWRConfiguration,
            getFoodCategoories: SWRConfiguration
        }
    }
}

const config: configProps = {
    pages: {
        home: {
            getOurNewMeals: {
                revalidateOnFocus: false,
                shouldRetryOnError: true,
                errorRetryCount: 2
            },
            getOurBestMeals: {
                revalidateOnFocus: false,
                shouldRetryOnError: true,
                errorRetryCount: 2
            },
            getFoodCategoories: {
                revalidateOnFocus: false,
                shouldRetryOnError: true,
                errorRetryCount: 2
            }
        }
    }
};

const swrConfig = {
    keys: {
        ...keys
    },
    configs: {
        ...config
    }
}

export {
    swrConfig
}