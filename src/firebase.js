import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA83kzb38YLIPo7VpL_Q-IE5Q2DHrQLXLU",
    authDomain: "idea-box-alopez.firebaseapp.com",
    projectId: "idea-box-alopez",
    storageBucket: "idea-box-alopez.appspot.com",
    messagingSenderId: "922154743760",
    appId: "1:922154743760:web:5259c34faf07c585db6bd5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };