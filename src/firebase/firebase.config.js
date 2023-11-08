// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2OEX1silRar_rdlPMCSocZMVeBL3SMWE",
    authDomain: "social-events-assignment9.firebaseapp.com",
    projectId: "social-events-assignment9",
    storageBucket: "social-events-assignment9.appspot.com",
    messagingSenderId: "370160935265",
    appId: "1:370160935265:web:9cc194474d82f3202ba520"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;