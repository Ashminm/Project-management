import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { homeProjects } from "../services/allApis";

function Homeprojects() {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const res = await homeProjects();
        if (res.status === 200) {
            setAllProjects(res.data);
        } else {
            console.log(res.response.data);
        }
    };
    return (
        <div className="row" style={{ justifyContent: "center" }}>
            <p className="text-center m-0" style={{ fontSize: "10px" }}>
                Brows my Recent
            </p>
            <h1 className="text-center">Projects</h1>
            <Row>
                {
                    allProjects ? (
                        allProjects.map((item) => (
                            <Col sm="12" md="6" lg="3">
                                <ProjectCard project={item} />
                            </Col>
                        ))
                    ) : (
                        <h3>no projects</h3>
                    )
                    //     <Col sm="12" md="6" lg="3">
                    //     <ProjectCard />
                    // </Col>
                }
            </Row>
        </div>
    );
}

export default Homeprojects;
