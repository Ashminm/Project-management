import React from 'react'
import AddProject from './AddProject'

function Myproject() {
  return (
    <div className='card shadow p-3 m-2'>
      <div className="d-flex justify-content-between">
        <h2>My Project</h2>
        <AddProject/>
      </div>
      <div className="mt-3">
        <div className="borded rounded shadow m-2">
          <div className="d-flex justify-content-between p-3">
            <h4>Project Title</h4>
            <div>
              <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
              <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
              <button className='btn'><i class="fa-solid fa-trash-can fa-2x"></i></button>
            </div>
          </div>
        </div>
        <p className='text-danger h3 p-3'>No Project Uploaded!!!</p>

      </div>
    </div>
  )
}

export default Myproject