import NavBar from '../components/navbar';
import Home from '../pages/home';
import Login from '../pages/signin';
import Signup from '../pages/signup';
import Patient from '../pages/patient';
import Doctor from '../pages/doctor';
import Oraganization from '../pages/organization';
import Admin from '../pages/admin';
import Sidebar from '../components/sidebar';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRoutes() {

    const { user } = useContext(Context);
    const userRole = user ? user.role : '';

    const role = () => {
        switch (userRole) {
            case 'Patient':
                return <Patient isPatient="true" />;
            case 'Doctor':
                return <Doctor isDoctor="true" />;
            case 'Admin':
                return <Admin isAdmin="true" />;
            case 'Organization':
                return <Oraganization isOrganization="true" />;
            default:
                return <Login />;
        }
    };

    return (
            <Router>
                <NavBar user={user} />
                <Routes>
                    <Route exact path="/" element={<Home />}>
                        {' '}
                    </Route>
                    <Route
                        exact
                        path="/login"
                        element={user ? role() : <Login />}
                    ></Route>
                    <Route
                        exact
                        path="/signup"
                        element={user ? <Home /> : <Signup />}
                    ></Route>
                    <Route
                        exact
                        path="/patient"
                        element={
                            userRole === 'Patient' ? (
                                <Patient isPatient="true" />
                            ) : (
                                <Signup />
                            )
                        }
                    ></Route>
                    <Route
                        exact
                        path="/doctor"
                        element={
                            userRole === 'Doctor' ? (
                                <Doctor isDoctor="true" />
                            ) : (
                                <Login />
                            )
                        }
                    ></Route>
                    <Route
                        exact
                        path="/organization"
                        element={
                            userRole === 'Organization' ? (
                                <Oraganization isOrganization="true" />
                            ) : (
                                <Login />
                            )
                        }
                    ></Route>
                    <Route
                        exact
                        path="/admin"
                        element={
                            userRole === 'Admin' ? (
                                <Admin isAdmin="true" />
                            ) : (
                                <Login />
                            )
                        }
                    ></Route>
                </Routes>
            </Router>
    );
}

export default AppRoutes;
