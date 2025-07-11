import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtcOfrl1jjinU_p_c8GpgNO8EpWgpQ3Rk",
  authDomain: "el-loco-burguers.firebaseapp.com",
  projectId: "el-loco-burguers",
  storageBucket: "el-loco-burguers.firebasestorage.app",
  messagingSenderId: "1056867522592",
  appId: "1:1056867522592:web:260ba5d9e6674d91224445",
  measurementId: "G-HSBLQQN1RE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);