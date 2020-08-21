import React, { useState } from "react";
import { createVolunteer } from '../../services/volunteers'
import { Redirect } from 'react-router-dom'

import "./VolunteerForm.css";

function VolunteerForm() {
  const [volunteer, setVolunteer] = useState({
    firstName:'',
    lastName: '',
    email: '',
    phone: '',
    address:'',
    secondAddress: '',
    city:'',
    state: '',
    zip: '',
    message:''
  })
  
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target 
    setVolunteer({
      ...volunteer, 
      [name]: value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createVolunteer(volunteer)
    setSubmitted({created})
  }

  if (submitted) return <Redirect to={'/'} />

  
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
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box-div_short">
            <label className="input-label">FIRST NAME</label>

            <input className="short-input_box" onChange={handleChange} name="firstName"  required></input>
          </div>

          <div className="input-box-div_short">
            <label className="input-label">LAST NAME</label>

            <input className="short-input_box" onChange={handleChange} name="lastName" required></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">EMAIL</label>
            <input className="long-input_box" onChange={handleChange} name="email" required></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">MESSAGE</label>
            <textarea className="message" onChange={handleChange} name="message" required></textarea>
          </div>
          <div className="input-box_div">
            <label className="input-label">PHONE NUMBER</label>
            <input className="long-input_box" onChange={handleChange} name="phone" required></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">MAILING ADDRESS</label>
            <input className="long-input_box" onChange={handleChange} name="address" required></input>
          </div>
          <div className="input-box_div">
            <label className="input-label">MAILING ADDRESS LINE 2</label>
            <input className="long-input_box" onChange={handleChange} name="secondAddress"></input>
          </div>

          <div className="input-box-div_short">
            <label className="input-label">CITY</label>
            <input className="short-input_box" onChange={handleChange} name="city" required></input>
          </div>
          <div className="input-box-div_short">
            <label className="input-label">STATE</label>
            <input className="short-input_box" onChange={handleChange} name="state" required></input>
          </div>
          <div className="input-box-div_short">
            <label className="input-label">ZIP CODE</label>
            <input className="short-input_box" onChange={handleChange} name="zip" required></input>
          </div>
          <div className="button-div">
            <button className="button" >{submitted ? 'Submitted!' : 'SUBMIT'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;
