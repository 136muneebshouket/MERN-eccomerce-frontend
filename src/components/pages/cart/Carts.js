import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useNavigate } from 'react-router-dom';

export default function Carts() {


  const [Carts, setCarts] = useState([]);
  //pageloader
  const [Loader, setLoader] = useState(false);

   //delete button loader
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const URL = "https://buy-itmern.adaptable.app";

  const getcarts = async () => {

    setLoader(true);

    const userid = localStorage.getItem("userid");
    if (!userid) {
      toast.error("you might need to login or signup ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/signup");
      }, 2500)


      return;
    }
    // let userID={
    //   userid
    // }
    await axios.get(`${URL}/api/carts/getcarts/${userid}`)
      .then((res) => {
        // console.log(res.data[0].product.title)
        setCarts(res.data)

        setLoader(false);
      })
      .catch((err) => {
        console.error(err)
        setLoader(false);
      })

  }



  useEffect(() => {
    getcarts();
  }, [])


  const deletecart = async (id) => {
    setIsloading(true);
    const userid = localStorage.getItem("userid");

    await axios.delete(`${URL}/api/carts/deletecart/${id}/${userid}`)
      .then((res) => {
        // console.log(res.data[0].product.title)
        getcarts();
        setIsloading(false);
      })
      .catch((err) => {
        console.error(err)
        setIsloading(false)
      })


  }


  return (
    <>
      {/* <div>hello im ur carts</div> */}
      {/* <button onClick={showcarts}>get carts</button> */}
      {/* <div>hello im ur carts</div> */}


      <div>


        <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
          <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>

                {Loader ?

                  <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border spinner-border-lg" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div> :


                  Carts.map((cart, i) => {
                    return <>
                      <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                        <div className="w-1/4">
                          <img src={cart.product.image} alt className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="md:pl-3 md:w-3/4">
                          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-base font-black leading-none text-gray-800">{cart.product.title}</p>
                            <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                            </select>
                          </div>

                          <p className="w-96 text-xs leading-3 text-gray-600">{cart.product.catogery}</p>
                          <div className="flex items-center justify-between pt-5 pr-6">
                            <div className="flex itemms-center">
                              <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                              {isloading ? <div className="spinner-border spinner-border-lg" role="status">
                                <span className="sr-only">Loading...</span>
                              </div> : 
                              <button onClick={() => deletecart(cart._id)} className="btn btn-danger m-1">delete</button>}


                            </div>
                            <p className="text-base font-black leading-none text-gray-800">Rs:{cart.product.price}</p>
                          </div>
                        </div>
                      </div>
                    </>


                  })


                }




              </div>

            </div>
          </div>
        </div>

      </div>





      <ToastContainer />
    </>

  )
}
