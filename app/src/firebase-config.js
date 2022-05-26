import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCI1dWVTmI2G--k-rl2oAiHyq6fZKex00o",
	authDomain: "comfort-projects-88083.firebaseapp.com",
	projectId: "comfort-projects-88083",
	storageBucket: "comfort-projects-88083.appspot.com",
	messagingSenderId: "1058277560789",
	appId: "1:1058277560789:web:a1e4bb5c57da703bc92d5c",
	measurementId: "G-TRVVDCCM81",
	databaseURL: "https://comfort-projects-88083-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
// export const db = getFirestore(app);
