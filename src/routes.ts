import getBaseUrl from "./utils/base-url";

export const ApplicationRoutes = {
    pages: {
        home: import.meta.env.BASE_URL,
        categories: getBaseUrl()+"/categories/:id",
        category: (id: number) => getBaseUrl()+"/categories/"+id
    }
}