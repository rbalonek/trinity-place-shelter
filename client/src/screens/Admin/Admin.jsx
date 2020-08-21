import React, { useState, useEffect } from 'react'
import './Admin.css'
import { getVolunteers } from '../../services/volunteers'
import Footer from '../../components/shared/Footer/Footer'
import VolunteerItem from '../../components/Admin/VolunteerItem'

function Admin() {
  const [allVolunteers, setAllVolunteers] = useState([])

  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteers = await getVolunteers()
      setAllVolunteers(volunteers)
    }
    fetchVolunteers()
  }, [])
  console.log(allVolunteers)

  const renderVolunteers = allVolunteers.map((volunteer) => {
    return (
      <VolunteerItem
        key={volunteer._id}
        _id={volunteer._id}
        firstName={volunteer.firstName}
        lastName={volunteer.lastName}
        createdAt={volunteer.createdAt}
        updatedAt={volunteer.updatedAt}
      />
    )
  })

  return (
    <div className="admin">
      <h1>Welcome to Admin</h1>
      <div className="admin__volunteers">{renderVolunteers}</div>
      <Footer />
    </div>
  )
}

export default Admin
