import { getFirestore } from "firebase/firestore";

import { FireBaseApp } from "../config";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(FireBaseApp);
