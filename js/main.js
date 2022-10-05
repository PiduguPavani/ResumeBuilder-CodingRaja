// Reference -
// import link from Firebase auth service cdn docs - > https: //firebase.google.com/docs/web/alt-setup

import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'

import {
    initialize
} from './firebase.js'

import {
    config
} from './config.js'


const loginBtn = document.getElementById("login-btn"); 
const getStarted = document.getElementById("get-started"); 

// Initializing firebase config from config.js
const {
    firebaseAuth
} = initialize(config.firebaseconfig)

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    // Using signin with popup function from firebase console
    signInWithPopup(firebaseAuth, new GoogleAuthProvider()).then(res => {

        console.log(res.user); 

        localStorage.setItem("user", JSON.stringify(res.user)); 
        location.href = "./pages/home.html"

    }).catch(err => console.log(err))
});

// Alert to insist the user to login. 
getStarted.addEventListener('click', function () {
    alert("Please Login to Get Started :)");
});


// Sign out function
// import {
//     getAuth,
//     signOut
// } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//     // Sign-out successful.
// }).catch((error) => {
//     // An error happened.
// });