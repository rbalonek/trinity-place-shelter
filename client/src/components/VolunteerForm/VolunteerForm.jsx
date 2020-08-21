import React from "react";
import "./VolunteerForm.css";

function VolunteerForm() {
  return (
    <div className="volunteer-div" >
      <div className="header-container">
      <h1 className="volunteer-text">VOLUNTEER</h1> <h1 className="divider">|</h1>
      <p className="volunteer-p">
        Hello! Thank you for your interest in volunteering. There are several
        ways you can give your time to help the youth of Trinityplace Shelter.
      </p>
      </div>
      <div className="volunteer-div_form">
        <form className="volunteer-form">
          <div className="input-box-div_short">
            <label classNamw="input-label">FIRST NAME</label>
            <input className="short-input_box"></input>
          </div>
          <div className="iput-box-div_short">
            <label classNamw="input-label">LAST NAME</label>
            <input className="short-input_box"></input>
          </div>
          <div className="input-box_div">
            <label classNamw="input-label">EMAIL</label>
            <input className="long-input_box"></input>
          </div>
          <div className="input-box_div">
            <label classNamw="input-label">MESSAGE</label>
            <textarea></textarea>
          </div>
          <div className="input-box_div">
            <label classNamw="input-label">PHONE NUMBER</label>
            <input className="long-input_box"></input>
          </div>
          <div className="input-box_div">
            <label classNamw="input-label">MAILING ADDRESS</label>
            <input className="long-input_box"></input>
          </div>
          <div className="input-box_div">
            <label classNamw="input-label">MAILING ADDRESS LINE 2</label>
            <input className="long-input_box"></input>
          </div>

          <div className="nput-box-div_short">
            <label classNamw="input-label">CITY</label>
            <input className="short-input_box"></input>
          </div>
          <div className="input-box-div_short">
            <label>STATE</label>
            <input className="short-input_box"></input>
          </div>
          <div className="input-box-div_short">
            <label>ZIP CODE</label>
            <input className="short-input_box"></input>
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;
