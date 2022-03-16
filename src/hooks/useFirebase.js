import initiaLizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut , onAuthStateChanged} from "firebase/auth";

initiaLizeFirebase();

const useFirebase=()=>{
    const [user,setUser]= useState({});
    const auth = getAuth();




    const registerUser = (email, password) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // setAuthError('');
            })
            .catch((error) => {
                // setAuthError(error.message);
                // console.log(error);
            })
            
    };
    
    const loginUser =(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
  })
  .catch((error) => {
    
  });

    }


    // observe user state
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            
            } else {
           
            }
          });
          return () =>unsubscribe;
    },[]);



    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }


    return{
        user,
        logOut,
        loginUser,
        registerUser
    }
}

export default useFirebase;