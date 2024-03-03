import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="bg-dark" style={{ width: "100%", height: "100%" }}>
                <Row className="p-5">
                    <Col md='1'>
                    </Col>
                    <Col md="4 text-white">
                        <h4 className="pb-2 text-white">
                            <i class="fa-brands fa-codepen fa-lg" style={{ color: "#fffff" }}></i> Project Fair
                        </h4>
                        <hr />
                        <p className="pt-2 text-white" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est, ipsum error earum deleniti
                            dolorem commodi reiciendis pariatur soluta. Deleniti veritatis eaque officia recusandae nisi
                            illo. Nemo repellendus beatae ipsum?
                        </p>
                    </Col>

                    <Col md="2" className="d-flex flex-column text-white">
                        <h4 className="text-white">Links</h4>
                        <hr />
                        <Link to={"/"} className="text-decoration-none text-white">
                            Landing page
                        </Link>
                        <Link to={"/register"} className="text-decoration-none text-white">
                            Register
                        </Link>
                        <Link to={"/login"} className="text-decoration-none text-white">
                            Login
                        </Link>
                        <Link to={"/dashboard"} className="text-decoration-none text-white">
                            Dashboard
                        </Link>
                    </Col>
                    <Col md="2" className="d-flex flex-column text-white">
                        <h4 className="text-white">Guides</h4>
                        <hr />
                        <Link to={"https://react.dev/"} className="text-decoration-none text-white">
                            React
                        </Link>
                        <Link to={"https://react-bootstrap.netlify.app/"} className="text-decoration-none text-white">
                            React-Bootstrap
                        </Link>
                        <Link to={"https://fontawesome.com/kits"} className="text-decoration-none text-white">
                            Fontawesome
                        </Link>
                        <Link to={"https://fonts.google.com/"} className="text-decoration-none text-white">
                            Google-Fonts
                        </Link>
                    </Col>
                    <Col md="2" className="d-flex flex-column text-white">
                        <h4 className="text-white">Contact Us</h4>
                        <hr />
                        <p>A108 Adam Street <br /> New York, NY 535022 <br /> United States</p>
                       <p className="m-0"><strong>Phone</strong> +91 5589 55488 5 </p>
                       <p><strong>Email</strong> : example@gmail.com</p>
                    </Col>
                </Row>
            </div>
            <div className="bg-black p-4 text-center">
                <Link>
                    <i class="fa-brands fa-github p-2"></i>|
                </Link>
                <Link>
                    <i class="fa-brands fa-x-twitter p-2"></i>|
                </Link>
                <Link>
                    <i class="fa-brands fa-facebook p-2"></i>
                </Link>
                <p className="text-center text-white m-0"> &#169; 2024, project fair</p>
            </div>
        </div>
    );
}

export default Footer;
