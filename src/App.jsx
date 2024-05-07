import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Pricing from "./components/About";

function App() {
  // const [connectionStatus, setConnectionStatus] = useState("");

  // const handleClick = async () => {
  //   try {
  //     const result = await axios.get(
  //       "http://localhost:5000/api/testConnection"
  //     ); // Replace with your backend URL
  //     setConnectionStatus(result.data);
  //   } catch (error) {
  //     console.error("Error connecting to blockchain:", error);
  //     setConnectionStatus("Connection failed");
  //   }
  // };

  return (
    <div>
      {/* <h1 style={{textAlign:"center", fontWeight:'bold', fontFamily:'sans-serif', marginTop:'20px'}}>Decenteralized Web App</h1> */}
      {/* <hr /> */}
      <div style={{marginLeft:'780px', marginTop:'10px'}}>
      <Navbar/>
      </div>
      <Pricing/>
      <Button/>
    </div>
  );
}

export default App;
