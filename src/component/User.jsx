import { useState } from "react";

const User = (props)=>{
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  return (
    <div className="user-card">
    <h1>Count = {count}</h1>
    <button onClick={()=>{
      setCount(count + 1    )
      }
    }>click me</button>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}  </h3>
      <h4>
        i like to learn about new technology 
      </h4>
    </div>
  )
}

export default User;