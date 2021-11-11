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
  const [admin, setAdmin] = useState(false);

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
        // save user to database
        saveUser(email, displayName, "POST");
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
        // save user to database
        saveUser(user.email, user.displayName, "PUT");
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
  // lode admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
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
  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return {
    user,
    admin,
    isLoding,
    authError,
    registerUser,
    loginwithEmail,
    loginWithGoogle,
    logOut,
  };
};

export default useFirebase;
