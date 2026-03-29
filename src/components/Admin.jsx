import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deletePlantAPI, plantAPI, viewAllAPI } from '../Services/allAPI';
import { addResponseContext } from '../Features/ContextProvider';
import { editResponseContext } from '../Features/ContextProvider';
import { toast } from 'react-toastify'
import serverURL from '../Services/serverURL';
import Edit from './Edit';






function Admin() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [plantDetails, setPlantDetails] = useState({ plantname: "", price: "", category: "", image: "", quantity: "" })
  console.log(plantDetails);

  const [viewPlant, settViewPlant] = useState()
  console.log(viewPlant);

  const [deleteResponse, setDeleteResponse] = useState({})
  const { setAddResponse, addResponse } = useContext(addResponseContext)
  const { editResponse } = useContext(editResponseContext)

  useEffect(() => {
    viewAllPlant()
  }, [deleteResponse, addResponse, editResponse])



  const [preview, setPreview] = useState("https://cdn-icons-png.flaticon.com/512/8114/8114415.png")

  const spotAdded = async () => {
    const { plantname, price, category, image, quantity } = plantDetails
    if (plantname && price && category && image && quantity) {


      const reqbody = new FormData()
      reqbody.append("plantname", plantname)
      reqbody.append("price", price)
      reqbody.append("category", category)
      reqbody.append("image", image)
      reqbody.append("quantity", quantity)


      const reqheader = {
        "content-type": "multipart/form-data",

      }
      try {
        const result = await plantAPI(reqbody, reqheader)
        console.log(result);
        if (result.status == 200) {
          alert("Spot added successfully")
          setAddResponse(result.data)
          handleClose()
        }
        else {
          if (result.status == 406) {
            toast.error(result.response.data)
          }
        }


      }
      catch (err) {
        console.log(err);

      }
    }
  }

  useEffect(() => {
    if (plantDetails.image.type == "image/png" || plantDetails.image.type == "image/jpg" || plantDetails.image.type == "image/jpeg") { setPreview(URL.createObjectURL(plantDetails.image)) }

  }, [plantDetails.image])


  const viewAllPlant = async () => {

    try {
      const viewPlant = await viewAllAPI()
      if (viewPlant.status == 200) {
        settViewPlant(viewPlant.data)
      }
      else {
        toast.error("data not found")
      }
    }
    catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    viewAllPlant()

  }, [])

  const handleDelete = async (plantname) => {
    try {
      const deletePlant = await deletePlantAPI(plantname)
      if (deletePlant.status == 200) {
        setDeleteResponse(deletePlant)
        alert("Deleted Succesfully")
      }


    } catch (err) {
      console.log(err);

    }

  }



  return (
    <>
      <div className='containet text-center p-5'>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Add Item
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='p-5 pt-0'>
                <label>
                  <img className='img-fluid' src={preview} alt="" />
                  <input onChange={(e) => setPlantDetails({ ...plantDetails, image: e.target.files[0] })} type="file" hidden name="" id="" />
                </label>
                <input onChange={(e) => setPlantDetails({ ...plantDetails, plantname: e.target.value })} type="text" className='form-control' placeholder='Plant name' />
                <input onChange={(e) => setPlantDetails({ ...plantDetails, price: e.target.value })} type="number" className='form-control mt-4' placeholder='Price' />
                <input onChange={(e) => setPlantDetails({ ...plantDetails, category: e.target.value })} type="text" className='form-control mt-4' placeholder='category' />
                <input onChange={(e) => setPlantDetails({ ...plantDetails, quantity: e.target.value })} type="text" className='form-control mt-4' placeholder='quantity' />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={spotAdded} variant="primary">Upload</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className='row'>
          <h2 className='text-center mt-5'>Plant Details</h2>
          {
            viewPlant?.map((data) => (
              <div className='col-lg-4'>
                <div className='card rounded my-4 ms-5' style={{ width: "300px", height: "400px" }}>
                  <img className='img-fluid h-100 w-100' src={`${serverURL}/uploads/${data.image}`} alt="Image" style={{ minHeight: "200px" }} />
                  <div className='bg-secondary '>
                    <h5 className='mt-3'>{data.plantname}</h5>
                    <p className='fw-bold'> <span className='text-success'>Rs:{data.price}</span><br />{data.category}</p>
                    <div className='d-flex align-items-center justify-content-center'>
                      <button onClick={() => handleDelete(data.plantname)} className='btn text-danger'><i className="fa-solid fa-trash"></i></button>
                      <Edit data={data} />
                    </div>
                  </div>
                </div>
              </div>
            ))


          }

        </div>
      </div>
    </>
  )
}

export default Admin
