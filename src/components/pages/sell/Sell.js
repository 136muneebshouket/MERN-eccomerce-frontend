
import React, { useState } from 'react'
import axios from "axios"
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

export default function Sell() {


  const URL = "https://buy-itmern.adaptable.app";
  


  const [state, setState] = useState({
    image: "",
    title: "",
    discription: "",
    price:"",
    catogery:""
  })

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  // const [title, setTitle] = useState('');
  // const [discription, setDiscription] = useState('');
  // const [catogery, setCatogery] = useState(null);
  // const [price, setPrice] = useState('');
  // const [image, setImage] = useState(null);


  const [successmsg, setSuccessmsg] = useState('');
  const [Uploaderror, setUploaderror] = useState('');
  // const [Imageerror, setImageerror] = useState('');
  const [isloading, setIsloading] = useState(false);





  // image upload
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setState({ ...state, image: base64 });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    let formData = { ...state }
    // const upolad=()=>{
    //   console.log(formData)
    //   setIsloading(false);
    //   setSuccessmsg("product uploaded")
    // }
    // upolad();
  await  axios.post(`${URL}/api/products/createproduct`, formData)
      .then(() => {
        console.log("A new product has been successfully added.")
        setIsloading(false)
       
        // setState({ ...state, title: '' });
        // setState({ ...state, discription: '' });
        // setState({ ...state, price: '' });
        // setState({ ...state, catogery: '' });
        setState({ ...state, image: "",
        title: "",
        discription: "",
        price:"",
        catogery:"" })
        setSuccessmsg("product uploaded");
        
        // setState({...state, image: "",
        // title: "",
        // discription: "",
        // price:"",
        // catogery:""})
        // alert("A NEW USER HAS BEEN CREATED")
        // toast.success("User added Succesfullty!", {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })
      .catch(err => {
        console.log(err);
        console.error(err)
        setUploaderror(err);
        // toast.error("there is some error", {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })

    
  }


















  return (
    <>
    <div>
      
        
        <div>
          {successmsg && <>
            <div class="alert alert-success" role="alert">
              {successmsg}
            </div>
          </>}
          <form onSubmit={handleSubmit} className="mx-5">
            <div className="form-group">
            <label for="name">Add image </label>
              <h6>first add image and then other fields</h6>
              <div><input type="file" className="form-control-file bg-success " id="file" name='image'
                
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              /></div>
              <label for="exampleInputEmail1">title</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="title"
              value={state.title}
              name="title"
              max="20"
                 onChange={handleChange}
                 required />

              <br />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">discription</label>
              <input type="text" className="form-control" placeholder="discription"
              value={state.discription}
               name="discription"
               max="30"
                  onChange={handleChange}
                
                 required />
            </div>
            <br />

            <Form.Select    name="catogery"  onChange={handleChange} aria-label="Default select example" required>
              <option >please select catogery</option>
              <option value="MEN">MEN</option>
              <option value="WOMEN">WOMEN</option>
              <option value="KIDS">KIDS</option>
            </Form.Select>



            <br />
            <div className="form-group">
              <label for="exampleInputPassword1">price</label>
              <input type="number" className="form-control" placeholder="price"
               value={state.price}
              name="price"
                  onChange={handleChange}
                 required />
            </div>
            <br />
            {/* <div className="form-group">
          <label for="exampleFormControlFile1">select image</label>
          <input type="file" className="form-control-file" id="file"
            onChange={handleproductimage} required/>
        </div> */}
            {/* {Imageerror && <>
              <div class="alert alert-danger" role="alert">
                {Imageerror}
              </div></>} */}
            <br />
           
              {isloading ?
                <Spinner className="spinner-border spinner-border-sm" animation="grow" />
                :  <button type="submit" className="btn btn-primary bg-dark">ADD PRODUCT</button>}
          </form>
          {Uploaderror && <>
            <div class="alert alert-danger" role="alert">
              {Uploaderror}
            </div></>}
        </div>

      
      

    </div>
    </>
  )
}
