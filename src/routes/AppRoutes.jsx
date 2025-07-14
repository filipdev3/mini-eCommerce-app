import { createBrowserRouter } from "react-router-dom";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDetailPage from "../pages/ProductDetailPage";


// Routes configuration
export const router = createBrowserRouter([
    {path: `/`, element: <ProductListingPage/>},
    {path: `/product/:id`, element: <ProductDetailPage/>}
],
{
    basename: "/mini-eCommerce-app"
}
)