
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from './components/header/Header'
import HOME from './components/pages/hompage/HOME'
import Carts from './components/pages/cart/Carts';
import Signup from './components/signup/Signup'
import Sell from './components/pages/sell/Sell';
import Cartpage from './components/pages/cartpage/Cartpage'
import Catogerynavbar from './components/header/Catogerynavbar';
function App() {


  const [EMAIL, setEMAIL] = useState("");
  const [CARTLENGTH, setCARTLENGTH] = useState(0);

  const URL = "https://buy-itmern.adaptable.app";


  const getuserdata = async () => {
    let token = localStorage.getItem("usertoken");

    //post request to authenticate user
    if (token) {
      const res = await fetch(`${URL}/api/auth/getuser`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "Authtokken": token
        }
      })
      const data = await res.json();
      setEMAIL(data.email)
      console.log(EMAIL);
      const userid = data._id;
      if(userid){
      await axios.get(`${URL}/api/carts/getcarts/${userid}`)
      .then((res) => {
        // console.log(res.data[0].product.title)
        setCARTLENGTH(res.data.length)
        console.log(res.data.length);
        
      })
      .catch((err) => {
        console.log(err)
       
      })
    }

    }

  }

  useEffect(() => {
    getuserdata()
  }, [])




  const [VALUE, setVALUE] = useState("");

  const pull_data = (data) => {
    // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    setVALUE(data)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header usercarts={CARTLENGTH} useremail={EMAIL} />
       
        <Routes>
          <Route element={<HOME func={pull_data} />} path="/"></Route>
        </Routes>
        <Routes>
          <Route element={<Carts />} path="/Carts"></Route>
        </Routes>
        <Routes>
          <Route element={<Signup />} path="/signup"></Route>
        </Routes>
        <Routes>
          <Route element={<Sell  />} path="/Sell"></Route>
        </Routes>
        <Routes>
          <Route element={<Cartpage cart={VALUE} />} path="/cartpage"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
