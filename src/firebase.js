import {initializeApp}  from 'firebase/app'
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIImOf4W6aGLHpx5MpdY5T_W8siqzfxCU",
  authDomain: "todo-react-firebase-e0d6d.firebaseapp.com",
  projectId: "todo-react-firebase-e0d6d",
  storageBucket: "todo-react-firebase-e0d6d.appspot.com",
  messagingSenderId: "73205275087",
  appId: "1:73205275087:web:159ab0bfb0eaaa40395aba"
};

  
  const firebaseApp= initializeApp(firebaseConfig)
  const db=getFirestore(firebaseApp);
  
  export  {db}