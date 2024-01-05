import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

function Homeprojects() {
  return (
    <div>
        <p className='text-center m-0' style={{fontSize:'10px'}}>Brows my Recent</p>
        <h1 className='text-center'>Projects</h1>
        <Row>
            <Col sm='12' md='6' lg='4'>
                <ProjectCard/>    
            </Col>
            <Col sm='12' md='6' lg='4'>
                <ProjectCard/>    
            </Col>
            <Col sm='12' md='6' lg='4'>
                <ProjectCard/>    
            </Col>
        </Row>
        
    </div>
  )
}

export default Homeprojects