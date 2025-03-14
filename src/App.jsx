
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Applayout from './component/Applayout'
import HeroSection from './component/HeroSection'
import ProductList from './component/Page/ProductList'
import ProductDetail from './component/Page/ProductDetail'
import ShoppingCart from './component/Page/ShoppingCart'
import Confirmed from './component/Page/Confirmed'
import AddressForm from './component/Page/AddressForm'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: "",
          element: <HeroSection/>,
        },
        {
          path: "/product-list",
          element: <ProductList/>,
        },
        {
          path: "/product-detail",
          element: <ProductDetail/>,
        },
        {
          path: "/cart",
          element: <ShoppingCart/>,
        },
        {
          path: "/confirmed",
          element: <Confirmed/>,
        },
        {
          path: "/address",
          element: <AddressForm/>,
        }
      
      ]
    }
  ])

  return <RouterProvider router={router} />



 

}

export default App