import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// seed file getting imported:

const config = {
  apiKey: "AIzaSyAEnSRgAsP4L-2RXebbzch2sIq4MyYFlqs",
  authDomain: "instagram-travel.firebaseapp.com",
  projectId: "instagram-travel",
  storageBucket: "instagram-travel.appspot.com",
  messagingSenderId: "981992119199",
  appId: "1:981992119199:web:e7c4366defdff64a2a7baa",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seed file getting called:

export { firebase, FieldValue };
