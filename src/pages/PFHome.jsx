import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import designimg from "../assets/land.png";
import Homeprojects from "../components/Homeprojects";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function PFHome() {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    });

    return (
        <>
            <div
                className="container-fluid router"
                style={{
                    width: "100%",
                    height: "100%",
                    color: "#FEFFFF",
                    backgroundImage: "linear-gradient(#93A5CF 20%,#E4EfE9,#fff)"
                }}
            >
                <Row className="align-items-center h-100" style={{ padding: "70px" }}>
                    <Col sm="12" md="6 ">
                        <h1 style={{ fontSize: "55px",color:'#000' }}>Project Fair</h1>
                        <h5 className="text-dark pt-3 mb-3">
                            Lorem ipsum dolor, sit amet r adipisicing elit, sit amet r adipisicing eladipisicing <br />{" "}
                            consectetur adipisicing elit.{" "}
                        </h5>
                        {isLogged ? (
                            <Link to={"/dashboard"} className="btn btn-dark">
                                Manage your Projects<i class="fa-solid fa-caret-right fa-lg ps-2"></i>
                            </Link>
                        ) : (
                            <Link to={"/login"} className="btn btn-dark">
                                EXPLORE<i class="fa-solid fa-caret-right fa-lg ps-2"></i>
                            </Link>
                        )}
                    </Col>
                    <Col sm="12" md="6">
                        <img src={designimg} className="img-fluid" alt="no image" />
                    </Col>
                </Row>
            </div>

            <div className="py-5">
                {/* <marquee behavior="scroll" direction="right"> */}
                <Homeprojects />
                {/* </marquee> */}
                <div className="text-center">
                    {isLogged ? (
                        <button>
                            <Link to="/projects" className="btn ">
                                See more<i class="fa-solid fa-angle-down ps-1"></i>
                            </Link>
                        </button>
                    ) : (
                        <Link to="/login" className="btn border-dark">
                            Login to see more<i class="fa-solid fa-angle-down ps-1"></i>
                        </Link>
                    )}
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}

export default PFHome;
