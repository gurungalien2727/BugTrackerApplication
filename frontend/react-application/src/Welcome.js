import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Routes from "./Routes";
import { Redirect } from "react-router-dom";
import axios from "axios";


function Welcome() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [status, setStatus] = useState(false);
  const responseGoogle = response => {
    setName(response.profileObj.name);
    setemail(response.profileObj.email);
    setStatus(true);
  };
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "25px",
  fontFamily: "Arial",
  margin: 'auto',
  width: '50%',

};
const style = {
  marginLeft: 'auto',
  marginRight: 'auto'
};
  if(status){
    const info = {
      name:name,
      email:email
    };

    axios
      .post("http://localhost:4000/ne", info)
      .then(() => console.log("Info Sent"))
      .catch(err => {
        console.error(err);
      });
      return <Redirect to={{pathname:"/Dash"}}></Redirect>
  }
  return (
    <div style={mystyle}>
   
      <h2>Login with Google Account</h2>

      <GoogleLogin style={style}
        clientId="Your Client Id"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}



export default Welcome;
