
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../auth';

const googleProvider=new GoogleAuthProvider();

export const AuthContext=createContext()

const AuthProvider = ({children}) => {

    const[user,setUser]=useState();
const [load,setLoad]=useState(true) 

 const signUp=(email,pass)=>{
       setLoad(true)
    return createUserWithEmailAndPassword(auth,email,pass)
  }

  const userSignIn=(email,pass)=>{
    setLoad(true)
     return signInWithEmailAndPassword(auth,email,pass)
  }
  const googleSign=()=>{
    setLoad(true)
    return signInWithPopup(auth,googleProvider)
  }
       
    const logOut=()=>{
        setLoad(true)
        return signOut(auth)
    }

    const updateUserProfile=(profile)=>{
     return updateProfile(auth.currentUser,profile)
    }
    
    const resetPass=(email)=>{
      return sendPasswordResetEmail(auth,email)
    }

   useEffect(()=>{
           const unsubscriber=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoad(false)
           })

           return ()=>{
            unsubscriber();
           }
   },[])

    const userInfo={
            signUp,userSignIn,googleSign,load,logOut,user,updateUserProfile,resetPass
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;