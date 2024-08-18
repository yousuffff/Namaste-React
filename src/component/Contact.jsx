const Contact =()=>{
  return (
    <div className="relative top-20">
    <div>
        <h1>Connect with us:</h1>
        <h1>Phone : <em>+91 8423694742</em></h1>
        <h1>Email : <em>personal43201@gmail.com</em></h1>
    </div>
    <form className="flex flex-col">
      <input type="text" name="userName" id="" placeholder="Fullname"/>
      <label htmlFor="userName">Enter your Name</label>
      <input type="email" name="email" id=""  placeholder="Email"/>
      <label htmlFor="email">Enter Email</label>
      <button className="p-2 m-2 bg-orange-400 w-32 text-white rounded-xl">Submit</button>
    </form>
    </div>
  )
}

export default Contact;