import React from "react";
import * as sp from "../utils/styleProvider";
import MapContainer from "../components/MapContainer";

export default function Contact() {
  function sendEmail() {
    window.location = "mailto:alvarez.matias.n@gmail.com";
  }

  function chatWhatsapp() {
    const link = "https://wa.me/393454077208";
    window.location = link;
  }

  function checkInstagram() {
    const link = "https://instagram.com/3daygg";
    window.location = link;
  }

  return (
    <div className="md:flex m-5">
      <div className="md:w-1/3 md:m-auto">
        {/* description block */}
        <div className="block">
          <p span className={sp.titleStyle}>
            Contacts
          </p>
          <p className={sp.primaryStyle}>
            Interested In freelance opportunities and to participate in
            ambitious projects. Please feel free to reach out!
          </p>
        </div>
      </div>
      <div className="md:w-1/3 md:m-auto">
        <div className="block">
          <MapContainer />
        </div>
      </div>
    </div>
  );
}
