import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import propTypes from "prop-types"
import { AuthProvider } from "../../ContextProvider/ContextProvider";


const PrivateRoute = ({children}) => {
    const {user,Loader}=useContext(AuthProvider);
    const location=useLocation();
    
    if(Loader){
       
         <div className="text-center m-20">
           <progress className="progress w-56 "></progress>
         </div>
       

    }

    if(user?.email){
        return children;
    }
    
    else{
      return (
        <Navigate state={location.pathname} to="/login" ></Navigate>
      );
    }
    
    
};

PrivateRoute.propTypes={
    children:propTypes.object,
}

export default PrivateRoute;