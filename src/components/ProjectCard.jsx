import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import projectImg from "../assets/project.png";
import { BASE_URL } from "../services/baseUrl";

function ProjectCard({ project }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <Card
                    onClick={handleShow}
                    style={{ width: "18rem" }}
                    id="Transparant"
                    className="rounded shadow p-2 border m-5"
                >
                    <Card.Img
                        variant="top"
                        src={`${BASE_URL}/upload/${project.project_image}`}
                        style={{ height: "13rem", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                    </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{project.title} - Detailse</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm="12" md="6" lg="4">
                                <img
                                    src={`${BASE_URL}/upload/${project.project_image}`}
                                    style={{ height: "15rem", width: "100%", objectFit: "cover" }}
                                    alt=""
                                />
                            </Col>
                            <Col sm="12" md="6" lg="7">
                                <h4>{project.title}</h4>
                                <p>{project.overview}</p>
                                <p>
                                    <strong>Languge used</strong> :{" "}
                                    <span className="text-danger fw-bold h5">{project.languages}</span>
                                </p>
                                <div
                                    className="p-2 d-flex rounded"
                                    style={{ border: "1px solid #000", justifyContent: "center" }}
                                >
                                    <div className="d-flex me-5 pt-2" style={{ justifyContent: "start" }}>
                                        <h5>Links -</h5>
                                    </div>
                                    <a target="_blank" href={project.github} className="btn">
                                        <i class="fa-brands fa-github fa-xl text-info "></i>
                                    </a>
                                    <a target="_blank" href={project.demo} className="btn">
                                        <i class="fa-solid fa-link fa-xl text-info"></i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default ProjectCard;
