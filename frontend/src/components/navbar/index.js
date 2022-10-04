import React from 'react';
import outlineLogo from '../../assets/hospital-logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const NavBar = (props) => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const dashboardRoute = () => {
        switch (user.role) {
            case 'Patient':
                return '/patient';
            case 'Doctor':
                return '/doctor';
            case 'Admin':
                return '/admin';
            case 'Organization':
                return '/organization';
            default:
                return '/';
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 relative">
                <nav className="bg-white border-b-2 border-gray-100 px-4 lg:px-6 py-2.5">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" class="flex items-center">
                            <img
                                src={outlineLogo}
                                class="mr-3 h-6 sm:h-9"
                                alt="Logo"
                            />
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                Vantari
                            </span>
                        </Link>
                        <div class="flex items-center lg:order-2">
                            {user ? (
                                <>
                                    <Link to={dashboardRoute()}>
                                        <button class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 dark:hover:text-white">
                                            Dashboard
                                        </button>
                                    </Link>
                                    <Link to="/login">
                                        <button
                                            onClick={handleLogout}
                                            class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 dark:hover:text-white"
                                        >
                                            Logout
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        to="/signup"
                                        class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        Sign up
                                    </Link>
                                </>
                            )}
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open main menu</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
