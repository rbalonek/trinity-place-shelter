import React, { useState, useEffect } from 'react'
import { useParams, Redirect, Link } from 'react-router-dom'
import {
  getVolunteer,
  updateVolunteer,
  deleteVolunteer,
} from '../../services/volunteers'
import './AdminUpdate.css'

function AdminUpdate(props) {
  const [volunteer, setVolunteer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    secondAddress: '',
    city: '',
    state: '',
    zip: '',
    message: '',
  })
  const [isLoaded, setLoaded] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchVolunteer = async () => {
      const volunteer = await getVolunteer(id)
      setVolunteer(volunteer)
      setLoaded(true)
    }
    fetchVolunteer()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setVolunteer({
      ...volunteer,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = props.match.params
    const updated = await updateVolunteer(id, volunteer)
    setUpdated(updated)
  }

  const backToAdmin = () => {
    props.history.push('/admin')
  }

  if (!isLoaded) {
    return <h1>Loading... Please wait.</h1>
  }

  return (
    <div className="admin-update">
      <div className="admin-update__details">
        <p>
          <b>Update Volunteer:</b>
        </p>
        <form onSubmit={handleSubmit} className="admin-update__form">
          <input
            value={volunteer.firstName}
            placeholder="First Name"
            name="firstName"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.lastName}
            placeholder="Last Name"
            name="lastName"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.phone}
            placeholder="Phone"
            name="phone"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.address}
            placeholder="Address"
            name="address"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.secondAddress}
            placeholder="Address Line 2"
            name="secondAddress"
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.city}
            placeholder="City"
            name="city"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.state}
            placeholder="State"
            name="state"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.zip}
            placeholder="Zip"
            name="zip"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            value={volunteer.message}
            placeholder="Volunteer message..."
            name="message"
            autoFocus
            onChange={handleChange}
          />
          {isUpdated ? <p>Update saved!</p> : ''}
          <button type="submit">Save Update</button>
        </form>
      </div>
      <div className="admin-update__buttons">
        <button onClick={backToAdmin}>Back to Admin</button>
      </div>
    </div>
  )
}

export default AdminUpdate
