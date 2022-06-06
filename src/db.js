import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyBw7Yfg11BcMojz5JWeuAvAOzOckrGmaoo",
    authDomain: "vue-chat-aa5a7.firebaseapp.com",
    databaseURL: "https://vue-chat-aa5a7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-chat-aa5a7",
    storageBucket: "vue-chat-aa5a7.appspot.com",
    messagingSenderId: "1075332432668",
    appId: "1:1075332432668:web:9fcda345395dfaa04930d9"
}

const db = firebase.initializeApp(config);

export default db;
