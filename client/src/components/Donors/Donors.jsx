// import React from 'react'
// import './Donors.css'

// function Donors() {
//   return (
//     <div className="donors">
//       <h1>Donors</h1>
//     </div>
//   )
// }

// export default Donors
import React from 'react'


export default function Banner({children,title,subtitle}) {
  
  return (
    <div className="donors">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
