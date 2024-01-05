import React from 'react'
import Header from '../components/Header'
import { Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <>
    <div>
      <Header/>
      <div className="mt-5 pt-5">
        <div className="text-center mb-3">
          <h2>All projects</h2>
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center w-50 border rounded">
              <input type="text" placeholder='Enter Technology to search' className='form-control'  />
              <div className="border rounded btn btn-secondary" style={{padding:'6px 15px 6px 18px'}}>
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center' style={{flexWrap:'wrap'}}>
          <ProjectCard/>
          <ProjectCard/>
        </div>

      </div>
    </div>
    </>
    
  )
}

export default Projects