import "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = getAuth();
    try {
      const userCred = await signInWithPopup(auth, provider);
      return {
        user: userCred,
      };
    } catch (e: any) {
      return {
        error: e.message,
      };
    }
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
};
