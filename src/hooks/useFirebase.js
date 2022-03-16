import initiaLizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut , onAuthStateChanged} from "firebase/auth";

initiaLizeFirebase();

const useFirebase=()=>{
    const [user,setUser]= useState({});
    const [isLoading,setIsLoading]=useState(true)
    const auth = getAuth();




    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // setAuthError('');
            })
            .catch((error) => {
                // setAuthError(error.message);
                // console.log(error);
            })
            .finally(()=>setIsLoading(false))
    };
    
    const loginUser =(email,password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
  })
  .catch((error) => {
    
  })
  .finally(()=>setIsLoading(false));

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
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }


    return{
        user,
        isLoading,
        logOut,
        loginUser,
        registerUser
    }
}

export default useFirebase;