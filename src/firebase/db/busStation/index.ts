import { db } from "../index";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { IBusStation, IBusStationArgs } from "./types";

export const getBusStation = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "busStation"));
    const result: IBusStation[] = [];
    querySnapshot.forEach((doc) => {
      const data: IBusStation = {
        id: doc.id,
        ...(doc.data() as IBusStation),
      };
      result.push(data);
    });
    return result;
  } catch (error) {
    console.log("No encontro data de los estaciones de autobuses", error.code);
  }
};

export const saveBusStation = async (args: IBusStationArgs) => {
  try {
    console.log("args", args);
    const result = await addDoc(collection(db, "busStation"), { ...args });
    console.log(result.id);
    return result.id;
  } catch (error) {
    console.log("Fallo crear  estacion de autobus", error.code);
  }
};

export const updateBusStation = async (id: string, args: IBusStationArgs) => {
  try {
    await setDoc(doc(db, "busStation", id), { ...args });
  } catch (error) {
    console.log("Fallo actualizando ruta de estacion de autobus", error.code);
  }
};

export const deleteBusStation = async (id: string) => {
  try {
    await deleteDoc(doc(db, "busStation", id));
  } catch (error) {
    console.log("Fallo eliminar estacion de autobus", error.code);
  }
};
