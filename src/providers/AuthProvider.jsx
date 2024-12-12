import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

// Social Auth Provider
const googleProvider = new GoogleAuthProvider();

// Auth Context
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // update email
  const updateUserEmail = (email) => {
    setLoading(true);
    return updateEmail(auth.currentUser, email);
  };

  // sign in user by email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const userSignOut = async () => {
    setLoading(true);
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    if (data.success) {
      setUser(null);
    }
    return signOut(auth);
  };

  // observer user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(user);

  const authInfo = {
    createUser,
    signInUser,
    googleLogin,
    userSignOut,
    updateUserProfile,
    updateUserEmail,
    user,
    setUser,
    loading,
    setLoading,
    isHovered,
    setIsHovered,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
