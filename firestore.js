// firestore.js
import app from "./firebase"; // 수정된 부분
import { getFirestore } from "firebase/firestore";

const fireStore = getFirestore(app);
export default fireStore;
