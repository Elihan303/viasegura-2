import { db } from "../index";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { IBus, IBusArgs } from "./types";

export const getBus = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "bus"));
    const result: IBus[] = [];
    querySnapshot.forEach((doc) => {
      const data: IBus = {
        id: doc.id,
        ...(doc.data() as IBus),
      };
      result.push(data);
    });
    return result;
  } catch (error) {
    console.log("No encontro data de los bus", error.code);
  }
};

export const saveBus = async (args: IBusArgs) => {
  try {
    const result = await addDoc(collection(db, "bus"), { ...args });
    console.log(result.id);
    return result.id;
  } catch (error) {
    console.log("Fallo crear autobus", error.code);
  }
};

export const updateBus = async (id: string, args: IBusArgs) => {
  try {
    await setDoc(doc(db, "bus", id), { ...args });
  } catch (error) {
    console.log("Fallo actualizando autobus", error.code);
  }
};

export const deleteBus = async (id: string) => {
  try {
    await deleteDoc(doc(db, "bus", id));
  } catch (error) {
    console.log("Fallo eliminar autobuses", error.code);
  }
};
