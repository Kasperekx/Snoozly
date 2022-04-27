import { LoginValues } from "./../../types/login.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function signIn(values: LoginValues) {
  await signInWithEmailAndPassword(auth, values.email, values.password).then(
    (response) => {
      localStorage.setItem("Auth Token", response.user.refreshToken);
    }
  );
}

export async function signOut() {
  await auth.signOut();
}
