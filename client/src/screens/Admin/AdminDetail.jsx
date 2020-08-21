import React, { useState, useEffect } from 'react'
import { useParams, Redirect, Link } from 'react-router-dom'
import {
  getVolunteer,
  updateVolunteer,
  deleteVolunteer,
} from '../../services/volunteers'
import './AdminDetail.css'

function AdminDetail(props) {
  const [volunteer, setVolunteer] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  // const [isUpdated, setUpdated] = useState(false)
  // const [isDeleted, setDeleted] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchVolunteer = async () => {
      const volunteer = await getVolunteer(id)
      setVolunteer(volunteer)
      setLoaded(true)
    }
    fetchVolunteer()
  }, [id])

  const backToAdmin = () => {
    props.history.push('/admin')
  }

  if (!isLoaded) {
    return <h1>Loading... Please wait.</h1>
  }

  return (
    <div className="admin-detail">
      <div className="admin-detail__details">
        <p>
          <b>Volunteer Detail:</b>
        </p>
        <p>
          Name: {volunteer.firstName} {volunteer.lastName}
        </p>
        <p>Email: {volunteer.email}</p>
        <p>Phone: {volunteer.phone}</p>
        <p>Address: {volunteer.address}</p>
        <p>
          {typeof volunteer.secondAddress === 'undefined'
            ? '(No additional address info provided.)'
            : `Address 2: ${volunteer.secondAddress}`}
        </p>
        <p>
          Location: {volunteer.city}, {volunteer.state} {volunteer.zip}
        </p>
        <p>Message: {volunteer.message}</p>
      </div>
      <div className="admin-detail__buttons">
        <button onClick={backToAdmin}>Back to Admin</button>
        <button onClick={() => alert('Update coming soon!')}>
          Update Volunteer
        </button>
        <button onClick={() => alert('Delete coming soon!')}>Delete</button>
      </div>
    </div>
  )
}

export default AdminDetail
