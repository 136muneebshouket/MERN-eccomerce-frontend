import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';







export default function Signup() {


  const [state1, setState1] = useState({

    email: "",
    password: ""
  })
  const signuphandlechange = e => {
    setState1(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  const [state2, setState2] = useState({

    email: "",
    password: ""
  })
  const loginhandlechange = e => {
    setState2(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  const [isloading, setIsloading] = useState(false);

  const URL = "https://buy-itmern.adaptable.app";



  //registeruser////////////////////////////////////////////////////////////////

  const registerUser = async (e) => {
    e.preventDefault();
    setIsloading(true)
    let signupdata = { ...state1 }
  
    await axios.post(`${URL}/api/auth/createuser`, signupdata)
      .then((res) => {
        // console.log(res);

        // console.log(res.data.authtoken);
        if (res.data.status === 200) {
          localStorage.setItem("usertoken", res.data.authtoken)
          localStorage.setItem("userid", res.data.data.user.id)

        }

        console.log("A new user has been successfully added.")

        // alert("A NEW USER HAS BEEN CREATED")
        toast.success("User added Succesfullty!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsloading(false)
        setState1({ ...state1, email: "",password: "" })

      })
      .catch(err => {
        console.error(err)
        // setUploaderror(err);
        toast.error("there is some error", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsloading(false)
      })







    // const res = await data.json();
    // console.log(res.response);


  }


  const loginUser = async (e) => {
    e.preventDefault();
    setIsloading(true)
    let logindata = { ...state2 }


    await axios.post(`${URL}/api/auth/login`, logindata)
      .then((res) => {
        // console.log(res);

        // console.log(res.data.authtoken);
        if (res.data.status === 200) {
          localStorage.setItem("usertoken", res.data.authtoken)
          localStorage.setItem("userid", res.data.data.user.id)

        }

        // console.log("A new user has been successfully added.")

        // alert("A NEW USER HAS BEEN CREATED")
        toast.success("User logedin Succesfullty!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setState2({ ...state2, email: "",password: "" })
        setIsloading(false)
      })
      .catch(err => {
        console.error(err)
        // setUploaderror(err);
        toast.error("please login with correct email and password", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsloading(false)
      })


  }


  const logout =  () => {
    // localStorage.setItem("usertoken",res.data.authtoken)
    // localStorage.setItem("userid",res.data.data.user.id)
    localStorage.removeItem("usertoken");
    localStorage.removeItem("userid");
    toast.success("User logedout Succesfullty!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  }





  return (
    <div>
      

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SIGN UP</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If doesn,t have account</p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">Email </label>
              <input type="email" id="email" name='email' value={state1.email} onChange={signuphandlechange}  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div class="relative flex-grow w-full">
              <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" value={state1.password} onChange={signuphandlechange}  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            {isloading ?
                <Spinner className="spinner-border spinner-border-sm" animation="grow" />
                :   <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={registerUser}>SIGN UP</button>
                
                }
          </div>
        </div>
        <div class="container px-5 py-17 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">LOGIN</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If already have an account then login by correct email and password</p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name='email' value={state2.email} onChange={loginhandlechange} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  required/>
            </div>
            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" value={state2.password} onChange={loginhandlechange} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
          {isloading ?
                <Spinner className="spinner-border spinner-border-sm" animation="grow" />
                :   <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={loginUser}>LOGIN</button>
                
                }
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col">
              <h3 className='text-center text-dark'> <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">LOG OUT</h1></h3>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="row mt-2">
                <div className="col text-center">
                  <button onClick={logout}
                    className='btn btn-danger' >Logout</button>
                </div>
              </div>

            </div>
          </div>

        </div>


      </section>




      <ToastContainer />



    </div>





  )
}
