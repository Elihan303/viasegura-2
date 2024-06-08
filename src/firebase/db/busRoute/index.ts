import { db } from "../index";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { IBusRoute, IBusRouteArgs } from "./types";

export const getBusRoute = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "busRoute"));
    const result: IBusRoute[] = [];
    querySnapshot.forEach((doc) => {
      const data: IBusRoute = {
        id: doc.id,
        ...(doc.data() as IBusRoute),
      };
      result.push(data);
    });
    return result;
  } catch (error) {
    console.log("No encontro data de los ruta de los  bus", error.code);
  }
};

export const saveBusRoute = async (args: IBusRouteArgs) => {
  try {
    const result = await addDoc(collection(db, "busRoute"), { ...args });
    console.log(result.id);
    return result.id;
  } catch (error) {
    console.log("Fallo crear  ruta autobus", error.code);
  }
};

export const updateBusRoute = async (id: string, args: IBusRouteArgs) => {
  try {
    await setDoc(doc(db, "busRoute", id), { ...args });
  } catch (error) {
    console.log("Fallo actualizando ruta autobus", error.code);
  }
};

export const deleteBusRoute = async (id: string) => {
  try {
    await deleteDoc(doc(db, "busRoute", id));
  } catch (error) {
    console.log("Fallo eliminar autobuses", error.code);
  }
};
