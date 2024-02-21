import React, { useRef, useState } from "react";
import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, key, personCircleOutline } from "ionicons/icons";
import { IonDatetime, IonButton } from "@ionic/react";
import "./me.css";
import { useHistory } from "react-router";
import { Calendar, DateObject } from "react-multi-date-picker";

export const Appointments = () => {
  const [date, setDate] = useState(new Date().setDate(new Date().toLocaleString()));
  const calendarRef = useRef();

  function update(key, value) {
    let date = calendarRef.current.date;
    calendarRef.current.set(key, date[key] + value);

    setDate(new DateObject(date));
  }
  const history = useHistory();
  function handleClick() {
    history.push("/appointment2");
  }
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Appointment</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div className="utsav-main">
        <div>
          {/* <button onClick={() => update("month", 1)}>+</button>
        <span style={style}>{date.month.name}</span>
        <button onClick={() => update("month", -1)}>-</button> */}
        </div>
        <div>
          {/* <button onClick={() => update("year", 1)}>+</button>
        <span style={style}>{date.year}</span>
        <button onClick={() => update("year", -1)}>-</button> */}
        </div>
        <div className="uttsav">
          <Calendar
            ref={calendarRef}
            value={date}
            onChange={setDate}
            minDate={new Date().setDate(10)}
            // maxDate={new Date().setDate(15)}
          />
        </div>
      </div>
      <div>
        <>
          <IonButton expand="full" color="light" onClick={handleClick}>
            ADD
          </IonButton>
          {/* <IonButton expand="full" onClick="" style={{ color: "white" }}>ADD</IonButton> */}
        </>
      </div>
      <div>
        <label></label>
      </div>
    </IonContent>
  );
};
