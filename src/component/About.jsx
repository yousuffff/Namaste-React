
import Userclass from "./UserClass";
import { Component } from "react";


class About extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    console.log("Mounter successfully"); 
  }
  render(){
    return (
      <div>
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