import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import { useHistory } from "react-router";
import "./me.css";
import axios from "axios";

export const ToDo = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setIsChecked] = useState(false);
  const [user, setUser] = useState("");

  const abc = localStorage.getItem("token");
  console.log(abc, "bbbbb");
  function handleCheckboxChange() {
    setIsChecked(!status);
  }

  const handleSubmit = async (e) => {
    const todataa = {
      user_id: "6412af6bbdfc42c19fb00f6c",
      title: title,
      date: new Date().toLocaleString(),
      status: status,
    };

    console.log(todataa, "data==>>>");

    try {
      const response = await axios.post(
        "https://8e53-2405-201-2029-a83c-7454-e834-5eb5-b804.in.ngrok.io/v1/user/todo/createTodo/",
        todataa,
        {
          headers: { Authorization: `Bearer ${abc}` },
        }
      );
      console.log(response, "respontodo");
      console.log("todataa", title, status, date, user);
    } catch (error) {}
  };
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">To Do</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div>
        <IonList>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Task"
          ></input>
          <button onClick={() => handleSubmit()}>Done</button>
          <div>
            <label>
              <input
                type="checkbox"
                checked={status}
                onChange={handleCheckboxChange}
              />
              Checkbox
            </label>
            <p>Value: {status ? 1 : 0}</p>
          </div>
          <div></div>
        </IonList>
      </div>
    </IonContent>
  );
};
