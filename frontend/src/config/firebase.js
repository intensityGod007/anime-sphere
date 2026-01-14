import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwJDs2bEcJzbcx6j_RdS-RlpW0Xco0vcE",
    authDomain: "anime-sphere-1cbb9.firebaseapp.com",
    projectId: "anime-sphere-1cbb9",
    storageBucket: "anime-sphere-1cbb9.firebasestorage.app",
    messagingSenderId: "675842507635",
    appId: "1:675842507635:web:b19627fc69adc3ff7c7b06",
    measurementId: "G-CF18FN1CTR"
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebase);

export default firebase;




