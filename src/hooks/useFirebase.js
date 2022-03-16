import { useEffect, useState } from "react";
import initiaLizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut , onAuthStateChanged} from "firebase/auth";

initiaLizeFirebase();

const useFirebase=()=>{
    const [user,setUser]= useState({});
    const auth = getAuth();


    const registerUser = (email, password) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            
    };

    // observe user state
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            
            } else {
           
            }
          });
          return () =>unsubscribe;
    },[])

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
        registerUser
    }
}

export default useFirebase();