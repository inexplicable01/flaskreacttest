import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ChatWindow from './ChatBot/ChatWindow';
import {useDispatch} from 'react-redux';
import withAuthProtection from './authentication/withAuthProtection';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {signOutUser} from '../actions/authActions'
import Home from "./Home";
import StepByStepGuide from "./StepByStepGuide";
import MortgageCalculator from "./MortgageCalculator";
import HomeInspectorSearch from "./HomeInspectorSearch";
import SignUp from "./authentication/SignUp";
import PropertyList from "./property/PropertyList";
import PropertyDetails from "./property/PropertyDetails";
import SubmitOffer from "./offer/SubmitOffer";
import ManageOffers from "./offer/ManageOffers";
import ContractGeneration from "./contract/ContractGeneration";
import Inspection from "./closing/Inspection";
import Financing from "./closing/Financing";
import FinalWalkthrough from "./closing/FinalWalkthrough";
import ResourcesAndTutorials from "./resources/ResourcesAndTutorials";
import {useSelector} from 'react-redux';
import logo from '../Logo.png';
import './DashBoard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {firstName, lastName} = useSelector((state) => state.auth);


    const handleSignOut = () => {
        dispatch(signOutUser(navigate));
    };
    return (<div>
            <Navbar bg="light" expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt="Your App Logo"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/dashboard/step-by-step-guide">Step-By-Step</Nav.Link>
                            <Nav.Link href="/dashboard/feature2">Feature 2</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/feature3">Feature 3</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/feature4">Feature 4</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/dashboard/feature5">Feature 5</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* Add 'ml-auto' class to move the button to the far right */}
                        <Nav className="navbar-nav">
                            <Nav.Item>
                                <button onClick={handleSignOut} className="btn btn-outline-danger">Sign out</button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <h1>Dashboard - Welcome {firstName} {lastName}</h1>
                {/* Add your routes and components here */}
                <ChatWindow/>
            </Container>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/step-by-step-guide" element={<StepByStepGuide/>}/>
                <Route path="/mortgage-calculator" element={<MortgageCalculator/>}/>
                <Route path="/home-inspector-search" element={<HomeInspectorSearch/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/properties" element={<PropertyList/>}/>
                <Route path="/properties/:id" element={<PropertyDetails/>}/>
                {/*<Route path="/create-property" element={<CreateProperty />} />*/}
                <Route path="/submit-offer" element={<SubmitOffer/>}/>
                <Route path="/manage-offers" element={<ManageOffers/>}/>
                <Route path="/contract-generation" element={<ContractGeneration/>}/>
                <Route path="/inspection" element={<Inspection/>}/>
                <Route path="/financing" element={<Financing/>}/>
                <Route path="/final-walkthrough" element={<FinalWalkthrough/>}/>
                <Route path="/resources-and-tutorials" element={<ResourcesAndTutorials/>}/>
            </Routes>
        </div>

    );
};

export default withAuthProtection(Dashboard);
