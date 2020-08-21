import React from 'react'


export default function Donors({children,title,subtitle}) {
  
  return (
    <div className="donors">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
