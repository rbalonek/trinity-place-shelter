import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import Volunteer from './screens/Volunteer/Volunteer'
import VolunteerForm from './screens/VolunteerForm/VolunteerForm'
import Donate from './screens/Donate/Donate'
import DonateForm from './screens/DonateForm/DonateForm'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/volunteer-form" component={VolunteerForm} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/donate-form" component={DonateForm} />
      </Switch>
    </div>
  )
}

export default App
