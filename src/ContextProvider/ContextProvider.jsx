import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import propTypes from "prop-types";
import axios from "axios";

export const AuthProvider=createContext(null);
const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [Loader,setLoader]=useState(true);
    const provider = new GoogleAuthProvider();


    const userSignUp=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userLogout=()=>{
        setLoader(true);
        return signOut(auth);
    }

    const GmailLogin=()=>{
        signInWithPopup(auth,provider);
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        console.log("current user", currentUser);
        setLoader(false);
        // if user exists then issue a token
        if (currentUser) {
          axios
            .post("http://localhost:5000/jwt", loggedUser, {
              withCredentials: true,
            })
            .then((res) => {
              console.log("token response", res.data);
            });
        } else {
          axios
            .post("http://localhost:5000/logout", loggedUser, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data);
            });
        }
      });
      return () => {
        return unsubscribe();
      };
    }, []);

    const authInfo = {
      user,
      userSignUp,
      userSignIn,
      userLogout,
      Loader,
      GmailLogin,
    };
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

ContextProvider.propTypes={
    children:propTypes.node,
}

export default ContextProvider;