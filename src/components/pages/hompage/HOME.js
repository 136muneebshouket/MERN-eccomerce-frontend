import React, { useState, useEffect } from 'react'
import axios from "axios"
import {
  // Table,
  Badge,
  Button,
  Modal,
  Form,
  InputGroup

} from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Catogerynavbar from '../../header/Catogerynavbar';








export default function HOME({ func }) {

  const URL = "https://buy-itmern.adaptable.app";


  const [products, setProducts] = useState([]);



  const [Loader, setLoader] = useState(false);


  const [catogery, setCatogery] = useState('');
  const [filter, setFilter] = useState(false);




  // const [state, setState] = useState({

  //   image: "",
  //   title: "",
  //  price:"",

  //   discription: ""

  // })
  // const [modelstate, setModelstate] = useState({})
  // const [Modelforshow, setModelforshow] = useState(false)

  useEffect(() => {
    setLoader(true);

    axios.get(`${URL}/api/products/getproducts`)
      .then((res) => {
        // console.log(res.data)
        setProducts(res.data)
        setLoader(false);
      })
      .catch((err) => {
        console.error(err)
        setLoader(false);
      })
  }, [])



  const pull_catogery = (data) => {
    // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    setFilter(true);
    setCatogery(data);
      
  }


  // const showmodel = (doc) => {

  //   setModelforshow(true)
  //   // console.log("im clicked")
  //   setModelstate(doc)
  //   console.log(state)

  // }

  // const addtocart = () => {

  // alert("added to cart")
  // }



  // const cartModel = (props) => {
  //   return (
  //     <Modal {...props} centered>
  //       <Modal.Header closeButton className="px-4">
  //         <Modal.Title className="fs-2">{modelstate.title}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body
  //        className="d-flex justify-content-around align-items-center">
  //         {/* <p className="px-2 fs-5">
  //           Are you sure you want to delete your account? <br />
  //           If you delete your account, you will permanently lose your profile.
  //         </p> */}
  //         <div> <img src={modelstate.image} className="img-fluid" alt="..."/></div>

  //       </Modal.Body>
  //       <Modal.Footer >

  //          <div><h5>
  //          <Badge bg="secondary">{modelstate.discription}</Badge><br />
  //       <Badge bg="dark">{modelstate.catogery}</Badge><br />
  //       <Badge bg="dark">Rs:{modelstate.price}</Badge>
  //     </h5></div>

  //       </Modal.Footer>
  //       <Modal.Footer
  //         as="div"
  //         className="d-flex justify-content-around align-items-center"
  //       >
  //         {/* <Button
  //           variant="outline-secondary"
  //           className="w-25"
  //           onClick={() => setModelforshow(false)}
  //         >
  //           Cancel
  //         </Button> */}

  //         <Button variant="primary ml-5" className="w-25" onClick={addtocart}>
  //           add to cart
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   )
  // }




  return (
    <>
    <div>
    <Catogerynavbar catogery={pull_catogery}/>
      {/* <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
          {Loader ?

            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border spinner-border-lg" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

            : <div className="flex flex-wrap -m-4">




            {
              products.map((doc, i) => {

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={doc.image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{doc.title}</h2>
                    <p className="mt-1">RS:{doc.price}</p></div>



                </div>
              })
            }
             </div>
          }






      </div>
      </div>
    </section> */}



      {Loader ?

        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border spinner-border-lg" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        :
       
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">

            <div class="flex flex-wrap -m-4">
              {filter?  products.map((doc, i) => {
                      if(doc.catogery==catogery){
                return <>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-gray-100 ">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={doc.image} />
                  </a>
                  <div class="mt-4 ">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{doc.catogery}</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{doc.title}</h2>
                    <p class="mt-1">Rs:{doc.price}</p>
                  </div>
                  <div > 
                  <Link to="/cartpage" className='text-light fw-bold'><button onClick={()=>func(doc) } class="btn btn-primary">see more</button></Link> </div>
                  
                </div>
                </>}
              }):
              
              products.map((doc, i) => {
                return<>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-gray-100 ">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={doc.image} />
                  </a>
                  <div class="mt-4 ">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{doc.catogery}</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{doc.title}</h2>
                    <p class="mt-1">Rs:{doc.price}</p>
                  </div>
                  <div > 
                  <Link to="/cartpage" className='text-light fw-bold'><button onClick={()=>func(doc) } class="btn btn-primary">see more</button></Link> </div>
                  
                </div>
                </>
              })}
            </div>

          </div>
        </section>

      }




      {/* <cartModel
        show={Modelforshow}
        onHide={() => setModelforshow(false)}
      /> */}
      </div>
    </>
  )
}
