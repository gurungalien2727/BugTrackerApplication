
import Home from "./Home";
import React, { Component } from "react";
import axios from "axios";
import { json } from "body-parser";


class AddBug extends Component {
  constructor(props) {
    super(props);
    this.state = { bugtitle: "", status:"",comment:"",priority:"", apiResponse: [] };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:4000/list")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { bugtitle,status,comment,priority } = this.state;

    const info = {
     bugtitle,status,comment,priority
    };

    axios
      .post("http://localhost:4000/info", info)
      .then(() => console.log("Info Sent"))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    

    return (
      <div>
        <Home></Home>

        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="bugtitle"
            placeholder="BugTitle"
            onChange={this.handleInputChange}
          />
          <br />

          <select type="text" name="status" onChange={this.handleInputChange}>
            <option>New</option>
            <option>Fixed</option>
            <option>User Review</option>
          </select>
          <br />
          <textarea
            placeholder="Comment"
            type="text"
            name="comment"
            onChange={this.handleInputChange}
          ></textarea>
          <br />
          <select
            name="priority"
            onChange={this.handleInputChange}
          >
            <option>Low</option>
            <option>Meduim</option>
            <option>High</option>
          </select>
          <br></br>
          <br></br>

          <input type="Submit"></input>
        </form>
      </div>
    );
  }
}
export default AddBug;