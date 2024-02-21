import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import Signin from "../../assets/images/create.jpg";
import Axios from "axios";

import {
  personOutline,
  mailOutline,
  keyOutline,
  callOutline,
  calendarClearOutline,
  eyeOffOutline,
  eyeOutline,
} from "ionicons/icons";
import Google from "../../assets/images/login-icon/google.jpg";
import Facebook from "../../assets/images/login-icon/facebook.jpg";
import Phone from "../../assets/images/login-icon/phone.jpg";
import React, { useState } from "react";
import "./login-create.css";

export const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [sDate, setSdate] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");

  const [activePassword, setActivePassword] = useState("");
  const [activeConfPassword, setActiveConfPassword] = useState("");

  // const validateName = (name) => {
  //   const regex = /^[a-zA-Z-' ]+$/;
  //   return regex.test(name);
  // };

  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };

  // const validatePhone = (phone) => {
  //   const regex = /^\d{10}$/;
  //   return regex.test(phone);
  // };

  const handleSubmit = (e) => {
    const data = {
      name: name,
      email: email,
      contactNo: phone,
      sdate: sDate,
      password: pass,
      confirmPassword: cpass,
      sDate: new Date().toLocaleString(),
    };
    Axios.post(
      "https://8e53-2405-201-2029-a83c-7454-e834-5eb5-b804.in.ngrok.io/v1/user/auth/register",
      data
    ).then((response) => {
      console.log(response);
    });
    // if (!validateName(name)) {
    //   return"handle invalid name";
    // } else if (!validateEmail(email)) {
    //   // handle invalid email
    // } else if (!validatePhone(phone)) {
    //   // handle invalid phone number
    // } else {
    //   // handle valid form submission
    // }
    // console.log("naammmee",name);
    console.log("dataaaa", name, email, phone, pass, cpass, sDate);
  };

  return (
    <IonContent>
      <div className="main-login">
        <div className="logimg">
          <img src={Signin} />
        </div>
        <div className="login-content">
          <div className="log-cont">
            <h3>Create Your Account</h3>
            <div className="login-create">
              <IonIcon icon={personOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Name...."
                onChange={(e) => setname(e.target.value)}
                required="true"
              />
            </div>
            <div className="login-create">
              <IonIcon icon={mailOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="text"
                value={email}
                name="email"
                placeholder="Email...."
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="login-create">
              <IonIcon icon={callOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="text"
                value={phone}
                name="phone"
                placeholder="Phone...."
                onChange={(e) => setphone(e.target.value)}
                maxLength="10"
                required="true"
              />
            </div>
            <div className="login-create">
              <IonIcon style={{ color: "#C2C2C2" }} />
              <input
                type="datetime-local"
                value={sDate}
                name="sDate"
                placeholder="Start Date...."
                onChange={(e) => setSdate(e.target.value)}
                required="true"
              />
            </div>
            <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="password"
                value={pass}
                name="pass"
                placeholder="Password...."
                onChange={(e) => setpass(e.target.value)}
                required="true"
              />
              <div
                className="d-flex justify-content-center align-items-center"
                onChange={(e) =>
                  activePassword == "eye"
                    ? setActivePassword("eyes")
                    : setActivePassword("eye")
                }
              >
                {activePassword == "eye" ? (
                  <IonIcon icon={eyeOffOutline} className="eye" />
                ) : (
                  <IonIcon icon={eyeOutline} className="eyes" />
                )}
              </div>
            </div>
            <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="password"
                value={cpass}
                name="cpass"
                onChange={(e) => setcpass(e.target.value)}
                placeholder="Confirm Password...."
                required="true"
              />
              <div
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  activeConfPassword == "eye"
                    ? setActiveConfPassword("eyes")
                    : setActiveConfPassword("eye")
                }
              >
                {activeConfPassword == "eye" ? (
                  <IonIcon icon={eyeOffOutline} className="eye" />
                ) : (
                  <IonIcon icon={eyeOutline} className="eyes" />
                )}
              </div>
            </div>
            <button onClick={handleSubmit}>Sign In</button>
            <div className="changes">
              <p>
                Alredy have an account? <a href="/login">Sign Up</a>
              </p>
            </div>
            {/* <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
                            <div className='socials'>
                                <img src={Google} />
                                <p>Login with Google</p>
                            </div>
                            <div className='socials'>
                                <img src={Facebook} />
                                <p>Login with Facebook</p>
                            </div>
                            <div className='socials'>
                                <img src={Phone} />
                                <p>Login with Mobile</p>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </IonContent>
  );
};
