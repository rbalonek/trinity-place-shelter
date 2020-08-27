import React from 'react'
import { Link } from 'react-router-dom'
import './VolunteerItem.css'

function VolunteerItem({ _id, firstName, lastName, createdAt, updatedAt }) {
  const transformTimestamp = (timestamp) => {
    return new Date(createdAt).toLocaleString()
  }
  return (
    <Link to={`/admin-detail/${_id}`}>
      <div className="volunteer-item">
        <h3 className="admin-name">
          {firstName} {lastName}
        </h3>
        <p className="admin-p">Updated: {transformTimestamp(updatedAt)}</p>
      </div>
    </Link>
  )
}

export default VolunteerItem
