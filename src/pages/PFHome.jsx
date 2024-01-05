import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import designimg from '../assets/land.png'
import Homeprojects from '../components/Homeprojects'
import { Link } from 'react-router-dom'

function PFHome() {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <>
    <div className="container-fluid router" style={{width:'100%',height:'100%', backgroundColor:'#3AAFA9',color:'#FEFFFF'}}>
            <Row className='align-items-center h-100' style={{padding:'90px'}}>
                <Col sm='12' md='6 '>
                    <h1  style={{fontSize:'55px'}}>Project Fair</h1>
                    <h5 className='text-dark pt-3 mb-3'>Lorem ipsum dolor, sit amet r adipisicing elit, sit amet r adipisicing eladipisicing <br /> consectetur adipisicing elit. </h5>
                      {
                        isLogged?
                        <Link to={'/dashboard'} className='btn btn-dark'>Manage your Projects<i class="fa-solid fa-caret-right fa-lg ps-2"></i></Link>
                        :
                        <Link to={'/login'} className='btn btn-dark'>EXPLORE<i class="fa-solid fa-caret-right fa-lg ps-2"></i></Link>

                      }
                </Col>
                <Col sm='12' md='6'>
                  <img src={designimg} className='img-fluid' alt="no image" />
                </Col>
            </Row> 
    </div>
    <div className="py-5">
      {/* <marquee behavior="scroll" direction="right"> */}
        <Homeprojects/>
      {/* </marquee> */}
      <div className="text-center">
        <button><Link to='/projects' className='btn'>See more<i class="fa-solid fa-angle-down ps-1"></i></Link></button>
        </div>
     
    </div>
    </>
  )
}

export default PFHome