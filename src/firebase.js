// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQr-J_Bs6gJerXvAJSmGqVAQ64SHrGNuc",
    authDomain: "projectcar-b2625.firebaseapp.com",
    databaseURL: "https://projectcar-b2625-default-rtdb.firebaseio.com",
    projectId: "projectcar-b2625",
    storageBucket: "projectcar-b2625.appspot.com",
    messagingSenderId: "195139449853",
    appId: "1:195139449853:web:42cde51364f45644d95f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getDatabase(app)