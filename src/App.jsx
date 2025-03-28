import { createBrowserRouter, RouterProvider, Outlet, useNavigate, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import SignIn from './component/Page/login/SignIn';
import SignUp from './component/Page/login/SignUp';
import Navbar from './component/Page/login/Navbar';
import Errorpage from './component/Page/Errorpage';
import HeroSection from './component/HeroSection';
import ProductList from './component/Page/ProductList';
import ProductDetail from './component/Page/ProductDetail';
import ShoppingCart from './component/Page/ShoppingCart';
// import Confirmed from './component/Page/Confirmed';
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
import ErrorPage from './component/Page/Errorpage';
// import Confirmed from "./component/Page/Confirmed"

function AuthWrapper({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('isAuthenticated') === 'true'
    );
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home'); // Redirect to '/home' after login
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        navigate('/'); // Redirect to '/' after logout
    };

    return (
        <>
            {isAuthenticated ? (
                // Redirect to '/home' if authenticated and accessing '/'
                window.location.pathname === '/' ? <Navigate to="/home" /> : <Applayout handleLogout={handleLogout} />
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
        errorElement: <Errorpage />,
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
        errorElement: <Errorpage />,
    },
    {
        path: '/forgot-password',
        element: (
            <>
                <Navbar />
                <RestPassword />
            </>
        ),
        errorElement: <Errorpage />,
    },
    {
        path: '/email',
        element: (
            <>
                <Navbar />
                <Email />
            </>
        ),
        errorElement: <Errorpage />,
    },
    {
        path: '/varification',
        element: (
            <>
                <Navbar />
                <Varification />
            </>
        ),
        errorElement: <Errorpage />,
    },
    {
        path: '/reset-password',
        element: (
            <>
                <Navbar />
                <Password />
            </>
        ),
        errorElement: <Errorpage />,
    },
    {
        path: '/home',
        element: <AuthWrapper />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HeroSection /> },
            { path: 'product-list', element: <ProductList /> },
         
            { path: 'product-detail/:id', element: <ProductDetail /> },
            { path: 'cart', element: <ShoppingCart /> },
            { path: 'confirmed', element: <Confirmed /> },
            { path: 'order', element: <MyOrders /> },
            { path: 'wishlist', element: <Wishlist /> },
            { path: 'orderdetails', element: <OrderDetails /> },
            { path: 'checkout', element: <Checkout /> },
            { path: 'addressform', element: <AddressForm /> },
            { path: 'contactdetails', element: <ContactDetails /> },
            { path: 'confiremd', element: <Confirmed /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
