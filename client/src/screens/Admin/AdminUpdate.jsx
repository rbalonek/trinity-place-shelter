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
        <form className="admin-update__form">
          <input
            value={volunteer.firstName}
            name="firstName"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.lastName}
            name="lastName"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.phone}
            name="phone"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.address}
            name="address"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.secondAddress}
            placeholder="Address Line 2"
            name="secondAddress"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.city}
            name="city"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.state}
            name="state"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            value={volunteer.zip}
            name="zip"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            value={volunteer.message}
            rows={10}
            cols={78}
            placeholder="Volunteer message..."
            name="message"
            required
            autoFocus
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="admin-update__buttons">
        <button onClick={backToAdmin}>Back to Admin</button>
        <button onClick={() => alert('PUT request')}>Save Update</button>
      </div>
    </div>
  )
}

export default AdminUpdate
