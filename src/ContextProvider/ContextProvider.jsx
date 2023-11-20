import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthProvider=createContext(null);
const ContextProvider = ({children}) => {

    const userSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
      userSignUp,
      userSignIn,
    };
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextProvider;