import { LoginValues } from "./../../types/login.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function signIn(values: LoginValues) {
  const res = await signInWithEmailAndPassword(
    auth,
    values.email,
    values.password
  );
  console.log(res);
}
