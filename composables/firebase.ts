// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAoJ7DesH-S47z9posFo7QvSiCxvjbxXKc',
  authDomain: 'come-on-international.firebaseapp.com',
  projectId: 'come-on-international',
  storageBucket: 'come-on-international.appspot.com',
  messagingSenderId: '982227222902',
  appId: '1:982227222902:web:f2038b47c5771136397a57',
  measurementId: 'G-5B0M8JCG3Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app)