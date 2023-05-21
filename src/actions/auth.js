import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseSetting";
import { history } from "../routers/AppRouter";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // show Google Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        //save to localStorage
        localStorage.setItem("accessToken", token);
        // signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
};
export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => {
  return () => {
    signOut(auth);
    history.push("/");
    window.location.reload();
  };
};
