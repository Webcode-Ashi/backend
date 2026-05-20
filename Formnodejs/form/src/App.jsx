import React, { useState } from "react";
import axios from "axios";
function App() {
  // state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
   const [allData, setAllData] = useState([]);
   const getAllData = async()=>{
    try{
      const res = await axios.get('http://localhost:3000/get-data')
      setAllData(res.data);
    }
    catch(error){
      console.log(error);
    }
  };

  // destructuring
  const { name, email, password, phone } = formData;

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // console me data print
    console.log({
      ...formData,
      [name]: value,
    });
  };

  // form submit
  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const res =await axios.post('http://localhost:3000/register',formData)
      alert("submitted")
    }
    catch(error){
      console.log(error);
      
    }
  };

  return (
    <div>
      <h2>React Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
        <br /><br />
        
      </form>
      <h2>All Data</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{phone}</td>
          </tr>
        </tbody>  
      </table>
    </div>
  );
}

export default App;