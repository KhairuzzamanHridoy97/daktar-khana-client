import initiaLizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,GoogleAuthProvider,onAuthStateChanged, updateProfile,signInWithPopup} from "firebase/auth";

initiaLizeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password,name,history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const newUser = {email,displayName:name};
              setUser(newUser)
              //save user to the database 
              saveUser(email,name);
              //send name to firebase after create
              updateProfile(auth.currentUser, {
                displayName:name, 
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
              history.replace('/');
          })
          .catch((error) => {
              setAuthError(error.message);
              console.log(error);
          })
          .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const destination = location?.state?.from || '/';
              history.replace(destination);
              setAuthError('');
          })
          .catch((error) => {
              setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
  };

  const signInWithGoogle=(location,history)=>{
      setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            setAuthError(' ')
            
          }).catch((error) => {
          setAuthError(error.message)
          
          }).finally(()=>setIsLoading(false));
  }

  // observer user state
  useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser({})
          }
          setIsLoading(false);
      });
      return () => unsubscribed;
  }, [])

  const logout = () => {
      setIsLoading(true);
      signOut(auth).then(() => {
          // Sign-out successful.
      }).catch((error) => {
          // An error happened.
      })
          .finally(() => setIsLoading(false));
  };

  const saveUser = (email,displayName)=>{
    const user ={email,displayName};
    fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then()
  } 

  return {
      user,
      isLoading,
      authError,
      signInWithGoogle,
      registerUser,
      loginUser,
      logout,
  }
}

export default useFirebase;