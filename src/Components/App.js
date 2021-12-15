import React from 'react';
import JobSearch from './JobSearch.js';
import Navbar from './Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';
import Login from './Login.js';
import RegistrationForm from './RegistrationForm.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
function App() {
  const [LoggedIn,setLoggedIn] = useState(false)
  const [appliedJid,setappliedJid] = useState("t")
  const [applicationForm, setApplicationForm] = useState(false)

  const isLoggedIn = () =>
  {
    console.log("IsLogged func");
    setLoggedIn(!LoggedIn)
  }
  return (
    <Router>
      <div className="App">
        <Navbar LoggedIn={LoggedIn} isLoggedIn={isLoggedIn} appliedJid={appliedJid} setappliedJid={setappliedJid} applicationForm={applicationForm} setApplicationForm={setApplicationForm}/>
        <Switch>
          <Route exact path='/'><JobSearch isLoggedIn={isLoggedIn} LoggedIn={LoggedIn} appliedJid={appliedJid} setappliedJid={setappliedJid} applicationForm={applicationForm} setApplicationForm={setApplicationForm}/></Route>
          <Route exact path='/loginpage'><Login isLoggedIn={isLoggedIn}/></Route>
          <Route exact path='/registrationpage'><RegistrationForm/></Route>
          <Route exact path='/employer' component={() => {window.location.href = 'https://job-portal-employee.herokuapp.com'; return null;}}></Route>
          <Route exact path='/candidateprofile'><Profile/></Route>

        </Switch>
        {/* <JobSearch/> */}
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
