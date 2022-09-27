import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Login from './pages/signin';
import Signup from './pages/signup';
import Patient from './pages/patient';
import Doctor from './pages/doctor';
import Oraganization from './pages/organization';
import Admin from './pages/admin';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const user = true;

    return (
        <div className="App">
            
            <Router>
                <NavBar user = {user}/>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/login"
                        element={user ? <Home /> : <Login/>}
                    ></Route>
                    <Route
                        exact
                        path="/signup"
                        element={user ? <Home /> : <Signup />}
                    ></Route>
                    <Route
                        exact
                        path="/patient"
                        element={user ? <Patient isPatient='true' /> : <Signup />}
                    ></Route>
                    <Route
                        exact
                        path="/doctor"
                        element={user ? <Doctor /> : <Login />}
                    ></Route>
                    <Route
                        exact
                        path="/organization"
                        element={user ? <Oraganization /> : <Login />}
                    ></Route>
                     <Route
                        exact
                        path="/admin"
                        element={user ? <Admin /> : <Login />}
                    ></Route>
                    {/* <Route
                        exact
                        path="/viewpost/:postID"
                        element={<ViewPost />}
                    ></Route> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
