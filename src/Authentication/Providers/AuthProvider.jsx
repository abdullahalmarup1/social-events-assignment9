import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [registerError, setRegisterError] = useState('')
    const [registrationSuccess, setRegistrationSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')

    /* Google Login */

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    /* create user or register  */
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    /*  Login or sign in*/

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    /* Sign out */
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('logged in inside ', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo =
    {
        user,
        loading,
        registerError,
        loginError,
        registrationSuccess,
        showPassword,
        loginSuccess,
        googleLogin,
        createUser,
        setRegisterError,
        setRegistrationSuccess,
        setShowPassword,
        signIn,
        userSignOut,
        setLoginError,
        setLoginSuccess

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}