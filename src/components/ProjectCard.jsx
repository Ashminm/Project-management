import React,{useState} from 'react'
import {Card, Col, Modal, Row } from 'react-bootstrap'
import projectImg from '../assets/project.png'





function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
        <Card onClick={handleShow} style={{ width: '19rem' }} className='rounded shadow p-2 border m-5'>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title>Play Short</Card.Title>
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Detailse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm='12' md='6'>
              <img src={projectImg} width={190} height={130} alt="" />
              <div className='pt-4'>
                <a target='_blank' href="https://github.com/Ashminm/media_player_repo.git" className='btn'><i class="fa-brands fa-github fa-xl ps-3"></i></a>
                <a target='_blank' href="https://mediaplayer1.netlify.app/" className='btn'><i class="fa-solid fa-link fa-xl ps-3"></i></a>
              </div>
            </Col>
            <Col sm='12' md='6'>
              <h4>Project Title</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio reprehenderit dolores maxime!</p>
              <p><span>Languge used</span>: <span className='text-info fw-bold'>HTML, CSS, JS</span></p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
    </>
  )
}

export default ProjectCard