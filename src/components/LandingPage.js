import React, {useState, useEffect} from 'react';

// import SignIn from './SignIn';
// import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';
// import Home from './Home';
// import StepByStepGuide from './StepByStepGuide';
// import MortgageCalculator from './MortgageCalculator';
// import HomeInspectorSearch from './HomeInspectorSearch';
// import AuthWrapper from './AuthWrapper';
// import ChatBot from './ChatBot';
// import {AuthContext} from '../context/AuthContext';
import {Button} from 'react-bootstrap';

// Imported components
// import SignUp from './authentication/SignUp';
// import PropertyList from './property/PropertyList';
// import PropertyDetails from './property/PropertyDetails';
// import CreateProperty from './property/CreateProperty';
// import SubmitOffer from './offer/SubmitOffer';
// import ManageOffers from './offer/ManageOffers';
// import ContractGeneration from './contract/ContractGeneration';
// import Inspection from './closing/Inspection';
// import Financing from './closing/Financing';
// import FinalWalkthrough from './closing/FinalWalkthrough';
// import ResourcesAndTutorials from './resources/ResourcesAndTutorials';
import AuthModal from "./authentication/AuthModal";
import {useSelector} from "react-redux";

const LandingPage = () => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const {isAuthenticated, errorMessage, login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     login(username, password);
    // };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="src/Logo.png" alt="Title Art" height="30"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/step-by-step-guide">
                                    Step-by-Step Guide
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mortgage-calculator">
                                    Mortgage Calculator
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home-inspector-search">
                                    Home Inspector Search
                                </Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/sign-in">*/}
                            {/*        Sign In*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    {!isAuthenticated && (
                        <Button onClick={openModal} variant="outline-primary">
                            Sign In
                        </Button>
                    )}
                    <AuthModal show={showModal} closeModal={closeModal}/>
                </div>
            </nav>
        </div>

    );
}

export default LandingPage;