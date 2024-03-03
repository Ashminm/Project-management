import React, { useState, useEffect,useContext } from "react";
import AddProject from "./AddProject";
import { deleteProjectApi, userProjects } from "../services/allApis";
import { addProjectResponseConext } from "../context/ContextShare";
import { editProjectResponseConext } from "../context/ContextShare";
import EditProject from "./EditProject";
import { toast } from "react-toastify";

function Myproject() {
    const [token, setToken] = useState("");
    const [projects, setProjects] = useState([]);

    const {addProjectRespnse,setAddProjectResponse}= useContext(addProjectResponseConext)
    const {editProjectRespnse,setEditProjectResponse}= useContext(editProjectResponseConext)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }, []);
    useEffect(() => {
        if (token) {
            getProject();
        }
    }, [token,addProjectRespnse,editProjectRespnse]);

    const getProject = async () => {
        const regHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        const result = await userProjects(regHeader);
        // console.log(result);
        if (result.status === 200) {
            setProjects(result.data);
            // console.log(projects);
        } else {
            setProjects([]);
        }
    };

    const handledelete = async (id) =>{
        const reqHeader={
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
        const result=await deleteProjectApi(reqHeader,id)
        if(result.status===200){
            getProject();
            toast.success("project Deletion Success")
        }
        else{
            toast.error("Project Deletion Faild")
        }

    }

    return (
        <div className="card shadow p-3 m-2" style={{backgroundColor:'#ffffff89'}}>
            <div className="d-flex justify-content-between">
                <h3>My Project</h3>
                <AddProject />
            </div>
            <div className="mt-3">
                {projects ? (
                    projects.map((item) => (
                        <div className="borded rounded shadow m-2 mb-3" >
                            <div className="d-flex justify-content-between p-3">
                                <h5>{item.title}</h5>
                                <div>
                                    <a href={item.github} target="_blank">
                                        <button className="btn">
                                            <i class="fa-brands fa-github fa-1x"></i>
                                        </button>
                                    </a>
                                    <EditProject project={item}/>
                                    <button className="btn" onClick={()=>handledelete(item._id)}>
                                        <i class="fa-solid fa-trash-can fa-1x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-danger h4 p-3">No Project Uploaded!!!</p>
                )}
            </div>
        </div>
    );
}

export default Myproject;
