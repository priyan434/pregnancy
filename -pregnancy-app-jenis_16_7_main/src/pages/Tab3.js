import {
  IonContent,
  IonHeader,
  IonIcon
  // IonPage,
  // IonTitle,
  // IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import Daily from '../assets/images/baby/daily.png'
import "./Tab3.css";
import { useHistory } from 'react-router-dom'

const Tab3 = () => {
  const history = useHistory()
  return (
    <>
      <IonContent>
        <IonHeader>
          <div className="header py-3 px-3 text-center">
            {/* <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px", color: "white" }} /> */}
            <p className="m-0 fw-bold fs-5 text-white">Me</p>
            {/* <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} /> */}
          </div>
        </IonHeader>
        <IonContent fullscreen>
          <div className="px-3 py-2">
            <div className="row">
              <div className="col-6" style={{ padding: "12px" }}>
                <div onClick={() => history.push('/guides')} className="cards py-4 px-3 rounded-3" style={{ background: "#BBECD7", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Guides</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div onClick={() => history.push('/momweight')} className="cards py-4 px-3 rounded-3" style={{ background: "#E6E9ED", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Mom’s Weight</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div onClick={() => history.push('/mombump')} className="cards py-4 px-3 rounded-3" style={{ background: "#FEE3E3", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Mom’s Bump</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div onClick={() => history.push('/birthplan')} className="cards py-4 px-3 rounded-3" style={{ background: "#FEF0D7", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Birth Plan</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div onClick={() => history.push('/appointments')} className="cards py-4 px-3 rounded-3" style={{ background: "#D7EDF0", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Appointments</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div onClick={() => history.push('/todo')} className="cards py-4 px-3 rounded-3" style={{ background: "#C4C9F0", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">To Do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonContent>
    </>
  );
};

export default Tab3;
