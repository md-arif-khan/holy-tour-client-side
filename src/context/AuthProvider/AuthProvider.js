import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config'
export const AuthContext=createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const signUpGoogle=()=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }
    const signUp=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const updateName=(profile)=>{
        setLoading(true)
        updateProfile(auth.currentUser,profile)
    }
    const logIn=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscripe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>unsubscripe
    },[])
    const authInfo={signUp,updateName,user,logIn,logOut,signUpGoogle,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;