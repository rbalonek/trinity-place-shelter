import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import Volunteer from './screens/Volunteer/Volunteer'
import VolunteerFormScreen from './screens/VolunteerFormScreen/VolunteerFormScreen'
import Donate from './screens/Donate/Donate'
import Admin from './screens/Admin/Admin'
import AdminDetail from './screens/Admin/AdminDetail'
import HeaderNav from './components/shared/HeaderNav/HeaderNav'
import Footer from './components/shared/Footer/Footer'

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/volunteer-form" component={VolunteerFormScreen} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin-detail/:id" component={AdminDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
