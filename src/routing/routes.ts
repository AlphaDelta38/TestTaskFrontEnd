
import Products from "../componets/products";


export const IsAuthroutes = [
    {
        path: '/products',
        element: Products
    },
    {
        path: '/*',
        element: Products
    }
]

export const NoAuthroutes = [
    {
        path: '/products',
        element: Products
    },
]