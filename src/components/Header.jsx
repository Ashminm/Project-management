import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header({inDashboard}) {
  return (
    <div>
        <Navbar className="bg-body-tertiary position-fixed top-0 w-100 p-3" style={{zIndex:'1'}}>
        <Container>
            <Link to={'/'} className='text-decoration-none'>
                <Navbar.Brand>
                <i class="fa-brands fa-codepen fa-lg"></i>{' '}
                    Project Fair
                </Navbar.Brand>
          </Link>
          {
            inDashboard&&
            <div className='btn btn-info'>
              Log Out{''}
              <i class="fa-solid fa-caret-right fa-lg ps-2"></i>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header