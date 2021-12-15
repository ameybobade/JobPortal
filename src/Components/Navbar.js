import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { useHistory } from "react";
import { useHistory } from "react-router";

const Navbar = ({LoggedIn,isLoggedIn,setappliedJid,setApplicationForm,appliedJid}) => {

  console.log(appliedJid)
  let history = useHistory();
  
  const handleLogout = () => {
    isLoggedIn()
    setappliedJid("")
    setApplicationForm(false)
    history.push('/')
  }
  const handleNavbarDetails = () => {
    if (LoggedIn) {
      return (
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <NavLink className="nav-link" >
              Jobs Matching to your profile
            </NavLink> */}
          </li>
          <li className="nav-item">
            <NavLink to="/candidateprofile" exact className="nav-link" >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={handleLogout}>
              Logout
            </span>
          </li>
        </ul>
      )
    } else 
    {
      return (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="https://job-portal-employee.herokuapp.com" className="nav-link" >
              Employer's Login
            </a>
          </li>
          <li className="nav-item">
            <Link to="/loginpage" className="nav-link" >
              Signin/Signup
            </Link>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/registrationpage" className="nav-link">
              Registration
            </NavLink>
          </li> */}
        </ul>
      )
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" exact to="/">
            <h3>Karyam</h3>
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink  className="nav-link" exact to="/">
                Job Openings
              </NavLink>
            </li>
            {/* <li className="nav-item">
                  <a className="nav-link" href="#">Internship Openings</a>
                </li> */}
          </ul>

          {handleNavbarDetails()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
