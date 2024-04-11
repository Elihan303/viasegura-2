import { FireBaseApp } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth";
import { IAuth } from "./types";

const auth = getAuth(FireBaseApp);

export const createUser = async ({ email, password }: IAuth) => {
  try {
    const result: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(result);
    return result;
  } catch (e) {
    console.log("Error creado usuario", e.code);
    return e.code;
  }
};
export const signUser = async ({ email, password }: IAuth) => {
  try {
    const result: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(result);
    return result;
  } catch (e) {
    console.error("Inicio de sesion fallido", e.code);
    return e.code;
  }
};
