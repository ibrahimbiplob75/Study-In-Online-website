import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import propTypes from "prop-types";

export const AuthProvider=createContext(null);
const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [Loader,setLoader]=useState(true);


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


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(
          auth,
          (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
              setLoader(false);
            }
          }
        );
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
      user,
      userSignUp,
      userSignIn,
      userLogout,
      Loader,
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