import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig/firebaseConfig";
import useAxiosPublic from "../customHooks/useAxiosPublic";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      // photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);

      if (currentUser) {
        axiosPublic
          .post("/jwt", loggedUser, {})
          .then((res) => {
            localStorage.setItem("token", res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axiosPublic
          .post("/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            localStorage.removeItem("token");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => {
      return unSubscribe;
    };
  }, [user?.email, axiosPublic]);

  const userInfo = {
    user,
    loading,
    count,
    setCount,
    createUser,
    loginUser,
    logOutUser,
    googleLogin,
    githubLogin,
    resetPassword,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
