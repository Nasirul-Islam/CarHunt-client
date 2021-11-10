import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState({});
  const [isLoding, setIsLoding] = useState(true);

  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

  // registerUser
  const registerUser = (email, password, displayName, location, history) => {
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newuser = { email, displayName: displayName };
        setUser(newuser);
        // send user name to firebase
        updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then(() => {})
          .catch((error) => {});
        const distination = location?.state?.from || "/";
        history.replace(distination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoding(false));
  };
  // loginwithEmail
  const loginwithEmail = (email, password, location, history) => {
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const distination = location?.state?.from || "/";
        history.replace(distination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoding(false));
  };
  // loginWithGoogle
  const loginWithGoogle = (location, history) => {
    setIsLoding(true);
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        setAuthError("");
        const distination = location?.state?.from || "/";
        history.replace(distination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoding(false));
  };
  // User is signed in, see docs for a list of available properties
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoding(false);
    });
    return () => unsubscribe;
  }, [auth]);
  // logOut
  const logOut = () => {
    setIsLoding(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoding(false));
  };
  return {
    user,
    authError,
    isLoding,
    registerUser,
    loginwithEmail,
    loginWithGoogle,
    logOut,
  };
};

export default useFirebase;
