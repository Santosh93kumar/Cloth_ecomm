
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
import Password from './component/Page/login/Password'
import Verification from './component/Page/login/Verification'
import MyOrders from './component/Page/MyOrder'
import ContactDetails from "../src/component/Page/ContactDetails"
import Checkout from './component/Page/Checkout'
import EmptyCart from './component/Page/EmptyCart'
import Wishlist from './component/Page/Wishlist'
import ResetPassword from './component/Page/login/ResetPassword'
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
          path: "/order",
          element: <MyOrders/>,
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
          path:"/verify",
          element:<Verification/>,
        },
        {
          path:"/password",
          element:<Password/>,
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
        {
          path: "/reset-password",
          element: <ResetPassword/>,
        },

      
      ]
    }
  ])

  return <RouterProvider router={router} />



 

}

export default App