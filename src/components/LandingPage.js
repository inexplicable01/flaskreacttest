
import React, { useState, useContext, useEffect } from 'react';

import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Link, Routes , useNavigate} from 'react-router-dom';

import Home from './Home';
import StepByStepGuide from './StepByStepGuide';
import MortgageCalculator from './MortgageCalculator';
import HomeInspectorSearch from './HomeInspectorSearch';
import AuthWrapper from './AuthWrapper';
import ChatBot from './ChatBot';
import { AuthContext } from '../context/AuthContext';

// Imported components
import SignUp from './authentication/SignUp';
import PropertyList from './property/PropertyList';
import PropertyDetails from './property/PropertyDetails';
// import CreateProperty from './property/CreateProperty';
import SubmitOffer from './offer/SubmitOffer';
import ManageOffers from './offer/ManageOffers';
import ContractGeneration from './contract/ContractGeneration';
import Inspection from './closing/Inspection';
import Financing from './closing/Financing';
import FinalWalkthrough from './closing/FinalWalkthrough';
import ResourcesAndTutorials from './resources/ResourcesAndTutorials';

const  LandingPage = () =>{

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, errorMessage, login } = useContext(AuthContext);
  const navigate = useNavigate();

    useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
      <div>


      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="Logo.png" alt="Title Art" height="30" />
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
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
              <div>
      <h1>Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
        </div>
      </nav>
      <div className="App container mt-4">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/step-by-step-guide" element={<StepByStepGuide />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/home-inspector-search" element={<HomeInspectorSearch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          {/*<Route path="/create-property" element={<CreateProperty />} />*/}
          <Route path="/submit-offer" element={<SubmitOffer />} />
          <Route path="/manage-offers" element={<ManageOffers />} />
          <Route path="/contract-generation" element={<ContractGeneration />} />
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/final-walkthrough" element={<FinalWalkthrough />} />
          <Route path="/resources-and-tutorials" element={<ResourcesAndTutorials />} />
        </Routes>
 <ChatBot />
        <SignIn />
      </div>
              </div>

  );
}

export default LandingPage;