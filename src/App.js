import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/DashBoard';

// import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

// import AuthModal from './components/authentication/AuthModal';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/*" element={<LandingPage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;