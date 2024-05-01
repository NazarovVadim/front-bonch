import { createApp } from 'vue'
import components from '@/components/UI'
import App from './App.vue'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOR1H858-PtmnY3PqX6Jw9_vMjiENJeEw",
  authDomain: "bonch-c650f.firebaseapp.com",
  projectId: "bonch-c650f",
  storageBucket: "bonch-c650f.appspot.com",
  messagingSenderId: "662144907461",
  appId: "1:662144907461:web:eb827cfe59660f0b5798ac",
  measurementId: "G-D2NFQ58BHH"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);

const app = createApp(App).use(VueReCaptcha, { siteKey: '6LcDq78pAAAAAN0PX-vdUeiSskudlrJDHVcIlE1e' });

components.forEach(component => {app.component(component.name, component)})


app.mount('#app')
