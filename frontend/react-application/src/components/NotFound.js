import React ,{useState }from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "./Data";
import Welcome from "../Welcome";
function NotFound(props){
 const[status, setStatus] = useState(false);

 function logout() {
   setStatus(true);
 }
 if (status) {
   return <Redirect to="/"></Redirect>;
 }
 const mystyle = {
   float: "right"
 };
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
        <h2>This is bug tracking application</h2>
        <br/><br/><br/><br/>
        <Data></Data>
      </div>
    );
}

export default NotFound;