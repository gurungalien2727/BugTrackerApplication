import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "react-router-dom";
import "./style.css";

import { Link } from "react-router-dom";

function Home(){
 const [status, setStatus] = useState(false);
    function logout()
{
    setStatus(true);
}
const mystyle = {
  
  float:'right',
  
};

if (status) {
  return <Redirect to="/"></Redirect>;
}
    return (
      <div>
        <ul>
          <li>
            <Link to="/Dash">Home</Link>
          </li>

          <li>
            
            <Link to="/Home">Add Bug</Link>
          </li>

          
        </ul>
        <div style={mystyle}>
          {" "}
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      </div>
    );





}
export default Home;