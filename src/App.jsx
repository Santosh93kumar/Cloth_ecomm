import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import SignIn from './component/Page/login/SignIn';
import SignUp from './component/Page/login/SignUp';
import Navbar from './component/Page/login/Navbar';
import Errorpage from './component/Page/Errorpage';
import HeroSection from './component/HeroSection';
import ProductList from './component/Page/ProductList';
import ProductDetail from './component/Page/ProductDetail';
import ShoppingCart from './component/Page/ShoppingCart';
import Confirmed from './component/Page/Confirmed';
import AddressForm from './component/Page/AddressForm';
import Applayout from './component/Applayout';
import Wishlist from "./component/Page/Wishlist"
import MyOrders from './component/Page/MyOrder';
import OrderDetails from "./component/Page/OrderDetails"
import Checkout from "./component/Page/Checkout"
import Password from "./component/Page/login/Password"
import RestPassword from "./component/Page/login/ResetPassword"
import Email from "./component/Page/login/Email"
import Varification from "./component/Page/login/Verification"
import ContactDetails from "./component/Page/ContactDetails"
import Confirmed from "./component/Page/Confirmed"

function AuthWrapper({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('isAuthenticated') === 'true'
    );
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        navigate('/');
    };

    return (
        <>
            {isAuthenticated ? (
                <>
                    <Applayout handleLogout={handleLogout}/>
                </>
            ) : (
                children(handleLoginSuccess)
            )}
        </>
    );
}

const router = createBrowserRouter([
    {
        path: '/sign-up',
        element: (
            <AuthWrapper>
                {(handleLoginSuccess) => (
                    <>
                        <Navbar />
                        <SignUp onSignUpSuccess={handleLoginSuccess} />
                    </>
                )}
            </AuthWrapper>
        ),
        errorElement: <Errorpage />,
    },
    {
        path: '/',
        element: (
            <AuthWrapper>
                {(handleLoginSuccess) => (
                    <>
                        <Navbar />
                        <SignIn onLoginSuccess={handleLoginSuccess} />
                    </>
                )}
            </AuthWrapper>
        ),
    },
    {
        path: '/signin',
        element: (
            <AuthWrapper>
                {(handleLoginSuccess) => (
                    <>
                        <Navbar />
                        <SignIn onLoginSuccess={handleLoginSuccess} />
                    </>
                )}
            </AuthWrapper>
        ),
    },
    {
        path: '/forgot-password',
        element: (
            <>
                <Navbar />
                <RestPassword />
            </>
        ),
    },
    {
        path: '/email',
        element: (
            <>
                <Navbar />
                <Email />
            </>
        ),
    },
    {
        path: '/varification',
        element: (
            <>
                <Navbar />
                <Varification />
            </>
        ),
    },
    {
        path: '/reset-password',
        element: (
            <>
                <Navbar />
                <Password />
            </>
        ),
    },
    {
        path: '/home',
        element: <AuthWrapper />,
        errorElement: <Errorpage />,
        children: [
            { index: true, element: <HeroSection /> },
            { path: 'product-list', element: <ProductList /> },
            { path: 'product-detail', element: <ProductDetail /> },
            { path: 'cart', element: <ShoppingCart /> },
            { path: 'confirmed', element: <Confirmed /> },
            { path: 'order', element: <MyOrders /> },
            { path: 'wishlist', element: <Wishlist /> },
            { path: 'orderdetails', element: <OrderDetails /> },
            { path: 'checkout', element: <Checkout /> },
            {path: 'addressform',element: <AddressForm /> },
            {path:'contactdetails',element:<ContactDetails/>},
            {path:'confiremd',element:<Confirmed/>}

        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
