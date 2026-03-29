import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updatePlantAPI } from '../Services/allAPI';
import { editResponseContext } from '../Features/ContextProvider';

function Edit({data}) {
     const [show, setShow] = useState(false);
     const { setEditResponse } = useContext(editResponseContext)

     const [editDetails,setEditDetails]=useState({plantname:'',price:'',category:''})
     console.log(editDetails);

     useEffect(()=>{
        if(data){
            setEditDetails({
            plantname:data.plantname || '',
            price:data.price || '',
            category:data.category || '',
            
        })
        }
     },[data])
     
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleUpdate = async () =>{
        try{
            const update = await updatePlantAPI(editDetails.plantname,editDetails)
            console.log(update);
            if(update.status == 200){
                alert("Updated successfully")
                setEditResponse(update.data)
                handleClose()
            }
        }
        catch(err){
            console.log(err);
            
        }
      }

      const preview = typeof editDetails.image =='string'
      ? editDetails.image
      : editDetails.image && URL.createObjectURL(editDetails.image)
  return (
    <>
      <button className='btn text-primary' variant="primary" onClick={handleShow}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='p-5 pt-0'>
                
                <input value={editDetails.plantname} onChange={(e) => setEditDetails({ ...editDetails, plantname: e.target.value })} type="text" className='form-control' placeholder='Plant name' />
                <input value={editDetails.price} onChange={(e) => setEditDetails({ ...editDetails, price: e.target.value })} type="number" className='form-control mt-4' placeholder='Price' />
                <input value={editDetails.category} onChange={(e) => setEditDetails({ ...editDetails, category: e.target.value })} type="text" className='form-control mt-4' placeholder='category' />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handleUpdate} variant="primary">Update</Button>
            </Modal.Footer>
          </Modal>
    </>
  )
}

export default Edit
