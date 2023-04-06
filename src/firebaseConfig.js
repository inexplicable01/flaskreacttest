import firebase, {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_APP_NAME + ".firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_APP_NAME,
    storageBucket: process.env.REACT_APP_FIREBASE_APP_NAME + ".appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// export default db;
export {auth, db, app, analytics};
// export default firebase;