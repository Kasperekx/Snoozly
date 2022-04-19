import { RegisterValues } from "./../../types/register.types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function signUp(values: RegisterValues) {
  await createUserWithEmailAndPassword(auth, values.email, values.password);
}
