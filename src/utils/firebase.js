// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsjpxf76knjDLGVwaVWsdwuAjba0uGOK4",
  authDomain: "my-fire-base-project-59b6c.firebaseapp.com",
  databaseURL: "https://my-fire-base-project-59b6c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-fire-base-project-59b6c",
  storageBucket: "my-fire-base-project-59b6c.appspot.com",
  messagingSenderId: "922158153634",
  appId: "1:922158153634:web:44b82f82b3804da8ea3cfb"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;