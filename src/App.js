import React from 'react';
// import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/DashBoard';

// import PrivateRoute from './components/PrivateRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Index2 from "./components/LandingPageIndex2";
import {authProtectedRoutes, publicRoutes} from "./Routes/allRoutes";
import {AuthProtected} from './Routes/AuthProtected';
import VerticalLayout from "./Layouts/index";
import WithAuthProtection from "./components/authentication/withAuthProtection";

// import AuthModal from './components/authentication/AuthModal';


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/*" element={<Index2/>}/>
                    <Route path="/olddashboard/*" element={<Dashboard/>}/>
                    {/*<Route path="/Index2" element={<Index2/>}/>*/}
                    <Route>
                        {authProtectedRoutes.map((route, idx) => (
                            <Route
                                path={route.path}
                                element={
                                    <WithAuthProtection>
                                        <VerticalLayout>{route.component}</VerticalLayout>
                                    </WithAuthProtection>}
                                key={idx}
                                exact={true}
                            />
                        ))}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;