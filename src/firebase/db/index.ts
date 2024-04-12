import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { FireBaseApp } from "../config";
import { IAccidentes, IReporteAccidente } from "./types";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(FireBaseApp);

export const getAccidents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "accidentes"));
    const result: IAccidentes[] = [];
    querySnapshot.forEach((doc) => {
      const data: IAccidentes = {
        Id: doc.id,
        ...(doc.data() as IAccidentes),
      };
      result.push(data);
    });
    return result;
  } catch (error) {
    console.log("No encontre data", error.code);
  }
};

export const saveAccident = async (args: IReporteAccidente) => {
  try {
    const result = await addDoc(collection(db, "accidentes"), { ...args });
    console.log(result.id);
    return result.id;
  } catch (error) {
    console.log("Fallo crear accidente", error.code);
  }
};

export const updateAccident = async (id: string, args: IReporteAccidente) => {
  try {
    await setDoc(doc(db, "accidentes", id), { ...args });
  } catch (error) {
    console.log("Fallo crear accidente", error.code);
  }
};

export const deleteAccident = async (id: string) => {
  try {
    await deleteDoc(doc(db, "accidentes", id));
  } catch (error) {
    console.log("Fallo eliminar accidente", error.code);
  }
};
