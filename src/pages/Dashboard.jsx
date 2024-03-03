import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import { Col, Row } from "react-bootstrap";
import Myproject from "../components/Myproject";
import {useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Dashboard() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        const existingUser = JSON.parse(localStorage.getItem("currentUser"))
        if(existingUser){
            setUserName(JSON.parse(localStorage.getItem("currentUser")).username)
        }
        else{
            navigate('/login')
        }
        },[])

    // console.log(userName);

    return (
        <div className="mt-5 pt-5" style={{ backgroundImage: "linear-gradient(#E4EfE9,#93A5CF)"}}>
            <Header inDashboard={true} />
            <Row className="p-3 pb-5">
              
            <Col sm="12" md="2">
                    
                    </Col>
                <Col sm="12" md="8">
                <h1 className="mb-4 h2">
                        Hello, <span className="text-danger">{userName}</span><span className="h3">!</span> 
                    </h1>
                    <Myproject />
                </Col>
               
            </Row>
        </div>
    );
}

export default Dashboard;
