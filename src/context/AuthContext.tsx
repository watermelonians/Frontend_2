import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  getIdToken,
  onIdTokenChanged,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { destroyCookie, setCookie } from "nookies";

interface AuthContextType {
  user: string | null;
  googleSignIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser.displayName : "NO USER LOGON");
      
      if (currentUser) {
        getIdToken(currentUser as any).then((token) => {
          setCookie(null, "token", token, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60,
          });
          setCookie(null, "email", currentUser?.email as string, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60,
          });
          setCookie(null, "displayName", currentUser?.displayName as string, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60,
          });
          setCookie(null, "photoURL", currentUser?.photoURL as string, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60,
          });
        });
      }
    });
    const test = onIdTokenChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((token) => {
          destroyCookie(null, "token");
          setCookie(null, "token", token, {
            path: "/",
          });
        });
      }
    });
    return () => {
      unsubscribe();
      test();
    };
  }, []); // Removed user from dependencies as it's not necessary here

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
