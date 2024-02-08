// firestore.js
import { app } from "./firebase";
import { getFirestore } from "firebase/firestore";

const fireStore = getFirestore(app);
export default fireStore;
