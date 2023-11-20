import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import propTypes from "prop-types";

export const AuthProvider=createContext(null);
const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null);


    const userSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userLogout=()=>{
       return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(
          auth,
          (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
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