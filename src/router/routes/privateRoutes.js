import { AdminRoutes } from "./AdminRoutes";
import { sellerRoutes } from "./sellerRoutes";

export const privateRoutes = [
    ...AdminRoutes,
    ...sellerRoutes
]