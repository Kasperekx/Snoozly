import { ChangeEmailValues, ChangePasswordValues, ChangeUserNameValues } from "types/userPanel.types";
import { getAuth, updateEmail, updatePassword, updateProfile } from "firebase/auth";

const auth = getAuth();

export async function changeEmail(values: ChangeEmailValues) {
  //@ts-ignore TODO:
  await updateEmail(auth.currentUser, values.email);
}

export async function changeName(values: ChangeUserNameValues ) {
  //@ts-ignore TODO:
  await updateProfile(auth.currentUser, {
    displayName: values.displayName
  })
}

export async function changePassword(values: ChangePasswordValues) { 
  //@ts-ignore TODO:
  await updatePassword(auth.currentUser, values.password )
} 
