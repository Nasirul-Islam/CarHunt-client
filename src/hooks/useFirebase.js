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

  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

  // registerUser
  const registerUser = (email, password, displayName, location, history) => {
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
      });
  };
  // loginwithEmail
  const loginwithEmail = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const distination = location?.state?.from || "/";
        history.replace(distination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  // loginWithGoogle
  const loginWithGoogle = (location, history) => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        setAuthError("");
        const distination = location?.state?.from || "/";
        history.replace(distination);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  // User is signed in, see docs for a list of available properties
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);
  // logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    authError,
    registerUser,
    loginwithEmail,
    loginWithGoogle,
    logOut,
  };
};

export default useFirebase;
