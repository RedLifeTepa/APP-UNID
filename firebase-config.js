// Configuración Oficial de Firebase — UNID FUTURO QUEST
// Proyecto: project-2998039825269712276
// Compatible con NPM (npm install firebase) y ES Modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, onSnapshot, collection, getDocs, deleteDoc } from "firebase/firestore";
import { getDatabase, ref, set, onValue } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDEN0sX4mJacYQSNcuIc2xMMUlgy3rfFQU",
  authDomain: "project-2998039825269712276.firebaseapp.com",
  projectId: "project-2998039825269712276",
  storageBucket: "project-2998039825269712276.firebasestorage.app",
  messagingSenderId: "401905115506",
  appId: "1:401905115506:web:b4a36539d945bd8849fdeb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
