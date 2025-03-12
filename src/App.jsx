
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Applayout from './component/Applayout'
import HeroSection from './component/HeroSection'
import ContactDetails from './component/Page/ContactDetails'
import Checkout from './component/Page/Checkout'
import EmptyCart from './component/Page/EmptyCart'
import Wishlist from './component/Page/Wishlist'
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
          path: "/contact",
          element: <ContactDetails/>,
        },
        {
          path: "/checkout",
          element: <Checkout/>,
        },
        {
          path: "/empty-cart",
          element: <EmptyCart/>,
        },
        {
          path: "/wishlist",
          element: <Wishlist/>,
        },
      ]
    }
  ])

  return <RouterProvider router={router} />



 

}

export default App