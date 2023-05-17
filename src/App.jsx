
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import PhoneLogin from './components/PhoneLogin/PhoneLogin';

function App() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain:import.meta.env.VITE_AUTHDOMAIN ,
    projectId:import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
    appId:import.meta.VITE_APPID
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unSubscriber();
  }, []);
  return (
    <>
        <div className="App">
      <h1>Verify Phone Number with OTP</h1>
      <PhoneLogin auth={firebase.auth()}></PhoneLogin>
    </div>
    </>
  )
}

export default App
