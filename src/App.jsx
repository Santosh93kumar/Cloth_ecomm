
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Applayout from './component/Applayout'
import HeroSection from './component/HeroSection'
import ProductList from './component/Page/ProductList'
import ProductDetail from './component/Page/ProductDetail'
import ShoppingCart from './component/Page/ShoppingCart'
import Confirmed from './component/Page/Confirmed'
import AddressForm from './component/Page/AddressForm'
import Errorpage from './component/Page/Errorpage'
import Email from './component/Page/Email'
import MyOrders from './component/Page/MyOrder'
import OrderDetails from "./component/Page/OrderDetails"
import SignUp from "./component/Page/SignUp"
import SignIn from "./component/Page/SignIn"
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
        },
        {
          path: "/error",
          element: <Errorpage/>,
        },
        {
          path:"/email",
          element:<Email/>,
        },
        {
          path:"/my-order",
          element:<MyOrders/>
        },
        {
          path:"/order-details",
          element:<OrderDetails/>
        },
        {
          path: 'sign-up',
          element: <SignUp />,
        }
        ,{
          path:"sign-in",
          element:<SignIn/>
        }
      
      ]
    }
  ])

  return <RouterProvider router={router} />



 

}

export default App