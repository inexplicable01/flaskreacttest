import * as actionTypes from '../constants/actionTypes';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../firebaseConfig';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

export const signUp = (email, password, firstName, lastName, age, navigate) => async (dispatch) => {
    const firestore = getFirestore();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userDocRef = doc(firestore, 'users', user.uid);
        await setDoc(userDocRef, {
            'First Name': firstName,
            'Last Name': lastName,
            Age: age,
        }).then(() => {
            dispatch({
                type: actionTypes.SIGN_UP_SUCCESS,
                payload: {uid: user.uid, email: user.email, Age: age, firstName, lastName}
            });
            navigate('/dashboard');
            return true;
        })
            .catch((error) => {
                dispatch({type: actionTypes.SIGN_UP_ERROR, payload: error.message});
                return false
            });
    } catch (error) {
        dispatch({type: actionTypes.SIGN_UP_ERROR, payload: error.message});
        return false
    }
};

export const signIn = (email, password, navigate) => async (dispatch) => {
    const firestore = getFirestore();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // console.log(user.uid)
        const userDocRef = doc(firestore, "users", user.uid);
        // console.log(userDocRef)
        const userDoc = await getDoc(userDocRef);
        // console.log('asfd2')
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const {Age, 'First Name': firstName, 'Last Name': lastName} = userData;
            dispatch({
                type: actionTypes.SIGN_IN_SUCCESS,
                payload: {
                    uid: user.uid,
                    email: user.email, Age, firstName, lastName
                },
            });
            navigate('/dashboard');
            return true;
        } else {
            // console.log('error?AFDF')
            dispatch({type: actionTypes.SIGN_IN_ERROR, payload: 'User document not found.'});
            return false;
        }


    } catch (error) {
        console.log(error)
        dispatch({type: actionTypes.SIGN_IN_ERROR, payload: error.message});
        return false;
    }
};

export const signOutUser = (navigate) => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch({type: actionTypes.SIGN_OUT_SUCCESS});
        navigate('/');
    } catch (error) {
        dispatch({type: actionTypes.SIGN_OUT_ERROR, payload: error.message});
    }
};

export const resetAuthError = () => ({
    type: actionTypes.RESET_AUTH_ERROR,
});
