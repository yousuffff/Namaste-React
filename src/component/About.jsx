
import Userclass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";


class About extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    console.log("Mounter successfully"); 
  }
  render(){
    return (
      <div className="top-20 relative w-6/12 grid grid-flow-row place-content-around m-auto">
      <div>
        <h1>Logged in User</h1>
        <UserContext.Consumer>
          { ({loggedInInfo}) => <h1 className="font-bold text-green-500 text-xl">{loggedInInfo}</h1>}
        </UserContext.Consumer>
      </div>
      <h1>This is Practice Project Based on Swiggy API</h1>
      <h2>I'm Currently learning ReactJS</h2>
      {/* <User name={'Mohd Yousuf'} location={'Lucknow'}/> */}
      <Userclass name={'Uzair Ahmad'} location={'Lucknow'} />
      </div>
    )
  }

}

/*
firstly constructor 
then render method 
and in last componentDidMount
 */
export default About;