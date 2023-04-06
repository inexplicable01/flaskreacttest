import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signIn, signUp} from '../../actions/authActions';
import './AuthModal.css';
import {useNavigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AuthModal = ({show, closeModal}) => {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('someone@someone.com');
    const [password, setPassword] = useState('someone');
    const [isSignUp, setIsSignUp] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authError = useSelector((state) => state.auth.error);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let success = false;
        if (isSignUp) {
            success = await dispatch(signUp(email, password, firstName, lastName, age, navigate));
        } else {
            success = await dispatch(signIn(email, password, navigate));
        }
        if (success) {
            closeModal();
        }
    };

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
    };
    if (!show) return null;

    return (
        <Modal show={show} onHide={closeModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    {isSignUp && (
                        <>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </>
                    )}
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    {authError && (
                        <p className="text-danger mt-2">
                            {authError}
                        </p>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" onClick={toggleAuthMode}>
                    {isSignUp
                        ? 'Already have an account? Sign In'
                        : "Don't have an account? Sign Up"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AuthModal;
