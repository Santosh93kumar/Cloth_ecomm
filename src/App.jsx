
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
import Email from './component/Page/login/Email'
import SignIn from './component/Page/login/SignIn'
import SignUp from './component/Page/login/SignUp'
import Password from './component/Page/login/Password'
import Verification from './component/Page/login/Verification'
import MyOrders from './component/Page/MyOrder'
import OrderDetails from './component/Page/OrderDetails'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      errorElement:<Errorpage/>,
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
          path: "/my-order",
          element: <MyOrders/>,
        },
        {
          path:"/order-details",
          element:<OrderDetails/>
        },
        {
          path:"/email",
          element:<Email/>,
        },
        {
          path:"/signin",
          element:<SignIn/>,
        },
        {
          path:"/sign-up",
          element:<SignUp/>,
        },
        {
          path:"/verify",
          element:<Verification/>,
        },
        {
          path:"/password",
          element:<Password/>,
        }
      
      ]
    }
  ])

  return <RouterProvider router={router} />

}

export default App