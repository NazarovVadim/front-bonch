import { createApp } from 'vue'
import components from '@/components/UI'
import App from './App.vue'
// // import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
// import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'


 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
//const analytics = getAnalytics(app1);


const app = createApp(App);

components.forEach(component => {app.component(component.name, component)})
// app.use(VueRecaptchaPlugin, {
//   v2SiteKey: '6LenAM0pAAAAAFxUdjLQUkomafDc36PaEXLtnTyh',
//   v3SiteKey: '6LcDq78pAAAAAN0PX-vdUeiSskudlrJDHVcIlE1e',
// })



app.mount('#app')
