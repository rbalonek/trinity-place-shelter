import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import Volunteer from './screens/Volunteer/Volunteer'
import VolunteerFormScreen from './screens/VolunteerFormScreen/VolunteerFormScreen'
import Donate from './screens/Donate/Donate'
import Admin from './screens/Admin/Admin'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/volunteer-form" component={VolunteerFormScreen} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  )
}

export default App
