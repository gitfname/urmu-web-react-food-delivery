import getBaseUrl from "./utils/base-url";

export const ApplicationRoutes = {
    pages: {
        home: import.meta.env.BASE_URL,
        categories: getBaseUrl()+"/categories/:id",
        category: (id: number): string => getBaseUrl()+"/categories/"+id,
        singleFoods: getBaseUrl()+"/foods/:id",
        singleFood: (id: number): string => getBaseUrl()+"/foods/"+id
    }
}