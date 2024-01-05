import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddProject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
                <div className="col-lg-5">
                    <label htmlFor="project" className=''>
                        <input type="file" id='project' style={{display:'none'}} />
                        <img src="https://www.freeiconspng.com/uploads/photo-album-icon-png-14.png" width={150} alt="no image" />
                    </label>
                </div>
                <div className="col-lg-7">
                    <input type="text" placeholder='Project Title' className='form-control mb-3 border-success'/>
                    <input type="text" placeholder='Project OverView' className='form-control mb-3 border-success'/>
                    <input type="text" placeholder='Languges Used' className='form-control mb-3 border-success'/>
                    <input type="text" placeholder='GitHub URL' className='form-control mb-3 border-success'/>
                </div>
                <input type="text" placeholder='Demo URl' className='form-control mb-3 border-success'/>

            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject