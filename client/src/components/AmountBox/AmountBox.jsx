import React from 'react'
import './AmountBox.css'

function AmountBox() {
  return (
    
    <div className="amount-div">

      <p className="amount-text" >CHOOSE YOUR AMOUNT</p>
      
      
       
      <label className="radio"> 
            <input className="input-circle" type="radio" name="amount"/> $100 
           
      </label> 
      <label className="radio"> 
            <input className="input-circle" type="radio" name="amount"/> $50
          
      </label> 
      <label className="radio"> 
            <input className="input-circle" type="radio" name="amount"/> $25 
            
      </label> 
      <label className="radio"> 
            <input className="input-circle" type="radio" name="amount"/> $ <input className="input-amount" placeholder="TYPE CUSTOM AMOUNT"/>
            
        </label> 
    
  </div>
  )
}

export default AmountBox
