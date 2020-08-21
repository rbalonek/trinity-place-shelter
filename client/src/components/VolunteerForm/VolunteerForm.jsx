import React from "react";
import "./VolunteerForm.css";

function VolunteerForm() {
  return (
    
    
  <div className="volunteer-div">
       <div className="header-container">
        <h1 className="volunteer-text">VOLUNTEER</h1>{" "}
        <h1 className="divider">|</h1>
        <p className="volunteer-p">
          Hello! Thank you for your interest in volunteering. There are several
          ways you can give your time to help the youth of Trinityplace Shelter.
        </p>
      </div>
      <div className="volunteer-div_form">
        <form className="form">
          
          <div className="input-box-div_short">
            <label className="input-label">FIRST NAME</label>

            <input className="short-input_box"></input>
            
          </div>

          <div className="input-box-div_short">
            <label className="input-label">LAST NAME</label>

            <input className="short-input_box"></input>
          </div>
           <div className="input-box_div">
            <label className="input-label">EMAIL</label>
            <input className="long-input_box"></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">MESSAGE</label>
            <textarea></textarea>
          </div>
          <div className="input-box_div">
            <label className="input-label">PHONE NUMBER</label>
            <input className="long-input_box"></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">MAILING ADDRESS</label>
            <input className="long-input_box"></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">MAILING ADDRESS LINE 2</label>
            <input className="long-input_box"></input>
          </div>

          <div className="input-box-div_short">
            <label className="input-label">CITY</label>
            <input className="short-input_box"></input>
          </div>
          <div className="input-box-div_short">
            <label className="input-label">STATE</label>
            <input className="short-input_box"></input>
          </div>
          <div className="input-box-div_short">
            <label className="input-label">ZIP CODE</label>
            <input className="short-input_box"></input>
          </div>
          <div className="button-div">

            <button className="button">SUBMIT</button> 
            </div>
        </form>
      </div> 

      </div>
        
    
  
       
    
  );
}

export default VolunteerForm;
