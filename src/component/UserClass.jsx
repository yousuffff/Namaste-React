import React from "react";


class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userInfo : {
        name : "Dummy",
        location : "Unknown"
      }
      // count: 0,
      // count1 : 0 // more then one state variable can initialize in class bases component


    }
  }
  async componentDidMount(){
    const data  = await fetch('https://api.github.com/users/yousuffff');
    const json = await data.json();
    console.log(json) 
    this.setState({userInfo : json})
    // debugger;  

  }
  render(){
    const {name , location} = this.state.userInfo;
    const {count, count1} = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count = {count}</h1>
        <button onClick={()=>{
        this.setState({
          count: this.state.count + 1
        })
        }
      }>click me</button> */}
      <img src={this.state.userInfo.
avatar_url
} alt="" className="avatar"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>
          i like to learn about new technology 
        </h4>
      </div>
    )
  }
}

export default Userclass;