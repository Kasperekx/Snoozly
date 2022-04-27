import { ChangeEmailValues } from "types/userPanel.types";
import { getAuth, updateEmail } from "firebase/auth";

const auth = getAuth();

export async function changeEmail(values: ChangeEmailValues) {
  //@ts-ignore TODO:
  await updateEmail(auth.currentUser, values.email);
}
