import React from 'react'
import './VolunteerItem.css'

function VolunteerItem({ firstName, lastName, createdAt, updatedAt }) {
  const transformTimestamp = (timestamp) => {
    return new Date(createdAt).toLocaleString()
  }
  return (
    <div className="volunteer-item">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Created: {transformTimestamp(createdAt)}</p>
    </div>
  )
}

export default VolunteerItem
