import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const PhoneLogin = ({auth}) => {
    useEffect(() => {
        const ui =firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start(".otp-container", {
            signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
          });
      });

  return <div className="otp-container">This is login</div>;
};

export default PhoneLogin;