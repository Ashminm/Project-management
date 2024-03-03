import React, { useState, useEffect,useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BASE_URL } from "../services/baseUrl";
import { ToastContainer, toast } from "react-toastify";
import { editProjectApi } from "../services/allApis";
// import { addProjectResponseConext } from "../context/ContextShare";
import { editProjectResponseConext } from "../context/ContextShare";

function EditProject({ project }) {
    const [show, setShow] = useState(false);
    // const [token, setToken] = useState("");

    // const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseConext);
    const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseConext);

    const [editData, setEditData] = useState({
        title: project.title,
        overview: project.overview,
        languages: project.languages,
        github: project.github,
        image: project.project_image,
        demo: project.demo,
    });

    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (editData.image != project.project_image) {
            setPreview(URL.createObjectURL(editData.image));
        }
    }, [editData.image]);
    // console.log(editData);

    const handleUpdate = async () => {
        const {title,overview,languages,github,image,demo} =editData
        if (
            !title ||
            !overview ||
            !languages ||
            !github ||
            !image ||
            !demo
            
        ) {
            toast.info("Enter Values to Every field!!");
        } else {
            // toast.success("sett"); 
            const reqBody = new FormData();
            reqBody.append("title", editData.title);
            reqBody.append("overview", editData.overview);
            reqBody.append("languages", editData.languages);
            reqBody.append("github", editData.github);
            reqBody.append("demo", editData.demo);
            reqBody.append("project_image", editData.image);
            // console.log(reqBody);
            if (editData.image == project.project_image) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                };
                const res=await editProjectApi(reqHeader,reqBody,project._id)
                if(res.status==200){
                    // setAddProjectResponse(res.data)
                    setEditProjectResponse(res.data)
                    toast.success("Project Details Uploaded")
                    handleClose()
                }
                else{
                    toast.error(res.response.data)
                }
            } else {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                };
                const res=await editProjectApi(reqHeader,reqBody,project._id)
                if(res.status==200){
                    // setAddProjectResponse(res.data)
                    setEditProjectResponse(res.data)
                    toast.success("Project Details Uploaded")
                    handleClose()
                }
                else{
                    toast.error(res.response.data)
                }
            }
        }
    };

    const handleClose = () => {
        setShow(false);
        setPreview("");
    };

    const handleShow = () => setShow(true);
    return (
        <>
            <button className="btn" onClick={handleShow}>
                <i class="fa-solid fa-pen-to-square fa-1x"></i>
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col-lg-5 mb-3">
                                <label htmlFor="project" className="w-250">
                                    <input
                                        type="file"
                                        id="project"
                                        style={{ display: "none" }}
                                        onChange={(e) => setEditData({ ...editData, image: e.target.files[0] })}
                                    />
                                    <img
                                        // src={
                                        //     project.project_image
                                        //         ? `${BASE_URL}/upload/${project.project_image}`
                                        //         : "https://cdn-icons-png.flaticon.com/512/6066/6066857.png"
                                        // }
                                        src={preview ? preview : `${BASE_URL}/upload/${project.project_image}`}
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
                                    defaultValue={project.title}
                                    // value={editData.title}
                                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                                />
                                {/* <input
                                    type="text"
                                    placeholder="Project OverView"
                                    className="form-control mb-3 border-success"
                                    value={project.overview}
                                /> */}
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="Languges Used"
                                    className="form-control mb-3 "
                                    defaultValue={project.languages}
                                    // value={editData.languages}
                                    onChange={(e) => setEditData({ ...editData, languages: e.target.value })}
                                />
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="GitHub URL"
                                    className="form-control mb-3 "
                                    defaultValue={project.github}
                                    // value={editData.github}
                                    onChange={(e) => setEditData({ ...editData, github: e.target.value })}
                                />
                                <input
                                    id="Transparant"
                                    type="text"
                                    placeholder="Demo URl"
                                    className="form-control mb-3 "
                                    defaultValue={project.demo}
                                    // value={editData.demo}
                                    onChange={(e) => setEditData({ ...editData, demo: e.target.value })}
                                />
                            </div>
                        </div>

                        <Form.Group className="mb-3" controlId="Textarea1">
                            <Form.Control
                                placeholder="Project OverView"
                                className="form-control mb-3 "
                                as="textarea"
                                id="Transparant"
                                rows={3}
                                defaultValue={project.overview}
                                // value={editData.overview}
                                onChange={(e) => setEditData({ ...editData, overview: e.target.value })}
                            />
                        </Form.Group>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditProject;
