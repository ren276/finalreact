// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jcRtHjFbsLQGhFQDU_MLChxc1uwJOKs",
  authDomain: "khwaish-c4339.firebaseapp.com",
  databaseURL: "https://khwaish-c4339-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khwaish-c4339",
  storageBucket: "khwaish-c4339.appspot.com",
  messagingSenderId: "372985509752",
  appId: "1:372985509752:web:39ff7fd3994cdcda817a8d",
  measurementId: "G-E31Y25QKNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export{auth}