import { db } from "../index";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { IUser, IUserArgs } from "./types";

export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "user"));
    const result: IUser[] = [];
    querySnapshot.forEach((doc) => {
      const data: IUser = {
        id: doc.id,
        ...(doc.data() as IUser),
      };
      result.push(data);
    });
    return result;
  } catch (error) {
    console.log("No encontro data de usuarios", error.code);
  }
};

export const saveUser = async (args: IUserArgs) => {
  try {
    console.log("args", args);
    const result = await addDoc(collection(db, "user"), { ...args });
    return result.id;
  } catch (error) {
    console.log("Fallo crear  usuario", error.code);
  }
};

export const updateUser = async (id: string, args: IUserArgs) => {
  try {
    await setDoc(doc(db, "user", id), { ...args });
  } catch (error) {
    console.log("Fallo actualizando usuario", error.code);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await deleteDoc(doc(db, "user", id));
  } catch (error) {
    console.log("Fallo eliminar user", error.code);
  }
};
