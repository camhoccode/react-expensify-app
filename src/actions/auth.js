import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseSetting";

export const startLogin = () => {
  return () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // show Google Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

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

export const startLogout = () => {
  return () => {
    signOut(auth);
  };
};
