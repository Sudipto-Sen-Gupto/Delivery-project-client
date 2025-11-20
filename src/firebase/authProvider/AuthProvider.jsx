
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../auth';

export const AuthContext=createContext()
const AuthProvider = ({children}) => {


  const signUp=(email,pass)=>{
    return createUserWithEmailAndPassword(auth,email,pass)
  }

  const userSignIn=(email,pass)=>{
     return signInWithEmailAndPassword(auth,email,pass)
  }

    const userInfo={
            signUp,userSignIn
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;