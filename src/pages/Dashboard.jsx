import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import { Col, Row } from 'react-bootstrap'
import Myproject from '../components/Myproject'

function Dashboard() {
  return (
    <div className='mt-5 pt-5'><Header inDashboard={true}/>
    <Row className='m-3 mb-5'>
      <Col sm='12' md='8'>
        <h1>Welcome <span className='text-info'>User</span></h1>
        <Myproject/>
      </Col>
      <Col  sm='12' md='4'>
      <Profile/>
      </Col>
    </Row>
    </div>
  )
}

export default Dashboard