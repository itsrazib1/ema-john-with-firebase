import React, { createContext, useState } from "react";
import app from "../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user , setUser] = useState(null);

const createuser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const singIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const logout = () => {
    return signOut(auth);
}

    const authinfo = {
        user,
        createuser,
        singIn,
        logout
    }
  return (
    <div>
      <AuthContext.Provider value={authinfo} >
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
