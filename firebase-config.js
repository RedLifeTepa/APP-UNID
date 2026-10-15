// Configuración Oficial de Firebase — UNID FUTURO QUEST
// Compatible con NPM (npm install firebase) y ES Modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { getDatabase, ref, set, onValue } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDcd6TgX2ykq_f7ipM_8iGEdQYA4xrmO_k",
  authDomain: "quiniela-mundial-417fa.firebaseapp.com",
  projectId: "quiniela-mundial-417fa",
  storageBucket: "quiniela-mundial-417fa.firebasestorage.app",
  messagingSenderId: "662664011522",
  appId: "1:662664011522:web:5efb1805888f252addac1b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
