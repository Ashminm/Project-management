import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../services/allApis'

function Projects() {
  const [token,setToken]= useState("")
  const [search,setSearch] = useState("")
  const [allProject,setAllProject]= useState([])

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  },[])

  useEffect(()=>{
    getAllProjects()
  },[token,search])


  const getAllProjects = async()=>{
    const header = {
      "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
    }
    const res = await allProjects(header,search)
    if(res.status === 200){
      setAllProject(res.data)
    }
  }
  console.log(allProject);

  return (
    <>
    <div>
      <Header/>
      <div className="mt-5 pt-5" style={{ backgroundImage: "linear-gradient(#E4EfE9,#93A5CF",}}>
        <div className="text-center mb-3">
          <h2>All projects</h2>
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center w-50 border rounded">
              <input type="text" id='Transparant' placeholder='Enter Your Project to search' className='form-control' onChange={(e)=>setSearch(e.target.value)}  />
              {/* <div className="border rounded btn btn-secondary" style={{padding:'6px 15px 6px 18px'}}>
              <i class="fa-solid fa-magnifying-glass"></i>
              </div> */}
            </div>
          </div>
        </div>

        <div className='row text-center' >
        <Row>
          {
            allProject?
            allProject.map(item=>(
              <Col xs="12" md="6" lg="4" xl="3">
              <ProjectCard project={item}/>

              </Col>
            ))
            :
            <h3>No project Available</h3>
          }
        </Row>
         
        </div>

      </div>
    </div>
    </>
    
  )
}

export default Projects