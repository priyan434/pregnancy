import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
} from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import { useHistory } from "react-router";
import "./me.css";
import { render } from "@testing-library/react";
import axios from "axios";

export const Appointment2 = (props) => {
  const [name, setname] = useState("");
  const [profession, setprofession] = useState("");
  const [date, setdate] = useState("");
  const [weight, setweight] = useState("");
  const [addNote, setaddNote] = useState("");
  const [user,setUser] = useState("");
  const history = useHistory();
  function handleSelectChange(event) {
    setprofession(event.target.value);
  }

  const handleSubmit = async (e) => {
    const dataa = {
      user_id : "6412af6bbdfc42c19fb00f6c",
      name: name,
      profession: profession,
      date: date,
      weight: weight,
      addNote: addNote,
    };

    console.log(dataa, "data==>>>");

    try {
      const response = await axios.post(
        "https://8e53-2405-201-2029-a83c-7454-e834-5eb5-b804.in.ngrok.io/v1/user/appointment/addAppointment/",
        dataa
      );
      console.log(response);
      console.log("appdataa", name, profession, date, weight, addNote,user);
    } catch (error) {}
  };
  return (
    <IonContent>  
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/appointments")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Appointment</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div class="center">
        <div>
          <input
            class="ridge"
            type="text"
            placeholder="Enter Your name"
            value={name}
            name="name"
            onChange={(e) => setname(e.target.value)}
            required="true"
          ></input>
        </div>
        <div>
          <select
            class="ridge"
            value={profession}
            onChange={handleSelectChange}
            placeholder="Profession"
          >
            <option value="Doctor">Doctor</option>
            <option value="Hospital">Hospital</option>
            <option value="Nurse">Nurse</option>
            <option value="Physiotherapist">Physiotherapist</option>
            <option value="Consultant">Consultant</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div>
          <input
            class="ridge"
            type="date"
            value={date}
            name="date"
            onChange={(e) => setdate(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            class="ridge"
            type="text"
            placeholder="Enter Mom's Weight"
            value={weight}
            onChange={(e) => setweight(e.target.value)}
            name="weight"
            required="true"
          ></input>
        </div>
        <div>
          <input
            class="ridge"
            type="textarea"
            placeholder="Add Notes (optional)"
            value={addNote}
            onChange={(e) => setaddNote(e.target.value)}
            name="notes"
          ></input>
        </div>
        <div>
          <button expand="full" color="light" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </IonContent>
  );
};
