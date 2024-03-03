import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addProjectApi } from "../services/allApis";
import { addProjectResponseConext } from "../context/ContextShare";
import { useNavigate } from "react-router-dom";

function AddProject() {
    const [show, setShow] = useState(false);
    const [token, setToken] = useState("");
    const navigate = useNavigate()
    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseConext);

    const [projectDetails, setProjectDedails] = useState({
        title: "",
        overview: "",
        languages: "",
        github: "",
        image: "",
        demo: "",
        userId: "",
    });
    const [preview, setPreview] = useState("");

    useEffect(() => {
        const existingUser = JSON.parse(localStorage.getItem("currentUser"))
        if (existingUser) {
            setProjectDedails({ ...projectDetails, userId: existingUser._id })
            // console.log(projectDetails.userId);
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }
            else {
                navigate('/')
            }

        }

    }, [projectDetails.userId])

    useEffect(() => {
        if (projectDetails.image) {
            setPreview(URL.createObjectURL(projectDetails.image));
        }
    }, [projectDetails.image]);
    // console.log(projectDetails);
    const handleAddProject = async () => {
        if (
            !projectDetails.title ||
            !projectDetails.overview ||
            !projectDetails.languages ||
            !projectDetails.github ||
            !projectDetails.demo ||
            !projectDetails.image ||
            !projectDetails.userId
        ) {
            toast.info("Enter Values to Every field!!");
        } else {
            const projectData = new FormData();
            projectData.append("title", projectDetails.title);
            projectData.append("overview", projectDetails.overview);
            projectData.append("languages", projectDetails.languages);
            projectData.append("github", projectDetails.github);
            projectData.append("demo", projectDetails.demo);
            projectData.append("userId", projectDetails.userId);
            projectData.append("project_image", projectDetails.image);
            // console.log(projectData);
            const regHeader = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            };
            // console.log(regHeader);
            const res = await addProjectApi(projectData, regHeader);
            // console.log(res);
            if (res.status === 200) {
                setAddProjectResponse(res.data);
                toast.success("Project Added Successfully!!");
                handleClose();
            } else {
                toast.error(res.response.data);
                // toast.error("Project Added Faild!!");
            }
        }
    };

    const handleClose = () => {
        setProjectDedails({ title: "", overview: "", languages: "", github: "", image: "", demo: "", userId: "" });
        setPreview("");
        setShow(false);
    };
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Project
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col-lg-5 mb-3">
                                <label htmlFor="project" className="w-250">
                                    <input
                                        type="file"
                                        id="project"
                                        onChange={(e) => setProjectDedails({ ...projectDetails, image: e.target.files[0] })}
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        src={
                                            preview
                                                ? preview
                                                : "https://static.vecteezy.com/system/resources/thumbnails/011/097/573/small/add-flat-icon-free-png.png"
                                        }
                                        className="img-fluid"
                                        style={{ width: "100%" }}
                                        alt="no image"
                                    />
                                </label>
                            </div>
                            <div className="col-lg-7">
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="Project Title"
                                    className="form-control mb-3 "
                                    onChange={(e) => setProjectDedails({ ...projectDetails, title: e.target.value })}
                                />
                                {/* <input
                                    type="text"
                                    placeholder="Project OverView"
                                    className="form-control mb-3 border-success"
                                    onChange={(e) => setProjectDedails({ ...projectDetails, overview: e.target.value })}
                                />
                               */}
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="Languges Used"
                                    className="form-control mb-3 s"
                                    onChange={(e) => setProjectDedails({ ...projectDetails, languages: e.target.value })}
                                />
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="GitHub URL"
                                    className="form-control mb-3 "
                                    onChange={(e) => setProjectDedails({ ...projectDetails, github: e.target.value })}
                                />
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="Demo URl"
                                    className="form-control mb-3"
                                    onChange={(e) => setProjectDedails({ ...projectDetails, demo: e.target.value })}
                                />
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="Textarea1">
                            <Form.Control
                                placeholder="Project OverView"
                                className="form-control mb-3"
                                as="textarea"
                                id="Transparant"
                                rows={3}
                                onChange={(e) => setProjectDedails({ ...projectDetails, overview: e.target.value })}
                            />
                        </Form.Group>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleAddProject}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-center" theme="dark" />
        </div>
    );
}

export default AddProject;
