import React from 'react'
import './DonateForm.css'
import DonateCardBox from '../DonateCardBox/DonateCardBox'
import AmountBox from '../AmountBox/AmountBox'
import DonateHeader from '../DonateHeader/DonateHeader'






function DonateForm() {
  return (
   
    
    <div className="donate-div" >
      <div className="donate-text">
      <DonateHeader />
      </div>
      <div className="amount-donate_box">
        <AmountBox />
        <DonateCardBox />
      </div>
      
      
   
    
      <div className="donate-div_form">
        
        <form className="donate-form" >
        
        <p className="billing-text">BILLING INFORMATION</p>
        
        <div className="donate-input-short_div">
          <label className="input-label"></label>

          <input className="short-input"   placeholder="FIRST NAME" required></input>
        </div>

        <div className="donate-input-short_div">
          <label className="input-label" ></label>

          <input className="short-input"  placeholder="LAST NAME" required></input>
        </div>
        <div className="donate-input-long_div">
          <label className="input-label"></label>
          <input className="long-input"   placeholder="EMAIL" required></input>
        </div>
       
        <div className="donate-input-long_div">
          <label className="input-label"></label>
          <input className="long-input"   placeholder="MAILING ADDRESS" required></input>
        </div>
        <div className="donate-input-long_div">
          <label className="input-label"></label>
          <input className="long-input"   placeholder="MAILING ADDRESS LINE 2" ></input>
        </div>
        

        <div className="donate-input-short_div">
          <label className="input-label"></label>
          <input className="short-input"  placeholder="CITY" required></input>
        </div>
        <div className="donate-input-short_div">
          <label className="input-label"></label>
          <input className="short-input"   placeholder="STATE" required></input>
        </div>
        <div className="donate-input-short_div">
          <label className="input-label"></label>
          <input className="short-input"   placeholder="ZIP CODE" required></input>
          </div>
          <div className="donate-input-short_div">
          <label className="input-label"></label>
          <input className="short-input"   placeholder="PHONE NUMBER" required></input>
        </div>
        <div className="button-div">
          <button className="button" >Submit</button>
        </div>
      </form>
    </div>
  </div>

     
      
   
  )
}

export default DonateForm
