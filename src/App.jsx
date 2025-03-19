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
// import Password from './component/Page/login/Password';

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
                    <Applayout />
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
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
                        <SignUp onSignUpSuccess={handleLoginSuccess} />
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
    // {
    //     path: '/forgot-password',
    //     element: (
    //         <>
    //             <Navbar />
    //             <Password />
    //         </>
    //     ),
    // },
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
            { path: 'address', element: <AddressForm /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
