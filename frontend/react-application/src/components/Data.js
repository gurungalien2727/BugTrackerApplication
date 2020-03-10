import React,{Component} from "react";
import Welcome from '../Welcome';
import axios from 'axios';
import { json } from "body-parser";
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      bugtitle: "",
      status: "",
      commment: "",
      priority: "",
      apiResponse: []
    };
    this.buttonwasClicked = this.buttonwasClicked.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:4000/list")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }
  handleInputChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  buttonwasClicked(a,b,c,d) {
    const value = this.state.email;

    const info = {
      bugtitle: a,
      status: b,
      comment: c,
      priority:d,
      email: value
    };

    axios
      .post("http://localhost:4000/create", info)
      .then(() => console.log("Book Created"))
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const mystyle = {
      textAlign: "center",
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <table id="students">
          <tbody>
            <tr>
              <td>Bug Title</td>
              <td>Status</td> <td>Comment</td>
              <td>Priority</td>
            
              <td>Send</td>
            </tr>
            {this.state.apiResponse.map(d => {
              return (
                <tr>
                  <td>{d.bugtitle}</td>
                  <td>{d.status}</td>
                  <td>{d.comment}</td>
                  <td>{d.priority}</td>

                  <input
                    ref="test"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  ></input>
                  <button onClick={()=>this.buttonwasClicked(d.bugtitle,d.status,d.comment,d.priority)}>send</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Data;