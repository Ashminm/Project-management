import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/allApis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
    const [useData, setUseData] = useState({
        username: "",
        email: "",
        password: "",
    });
    // console.log(useData)
    const navigate = useNavigate();

    const handleregistration = async (e) => {
        e.preventDefault();
        if (!useData.username || !useData.email || !useData.password) {
            toast.info("Enter Values to Every field!!");
        } else {
            const res = await registerApi(useData);
            // console.log(res);
            if (res.status === 200) {
                toast.success(`Resistration of ${res.data.username} is Successfull!!`);
                setUseData({ username: "", password: "", email: "" });
                navigate("/login");
            } else {
                toast.error(res.response.data);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(useData);
        const { email, password } = useData;
        if (!email || !password) {
            toast.info("Enter Email and Password");
        } else {
            const res = await loginApi(useData);
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem("currentUser", JSON.stringify(res.data.existingUser));
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("token", res.data.token);
                // alert("login successfull!!")
                toast.success("Login Successfull!!");
                setUseData({ username: "", password: "", email: "" });
                navigate("/");

            } else {
                toast.error("Login Faild");
            }
        }
    };

    const registerform = register ? true : false;
    return (
        <>
            <div
                style={{ width: "100%", height: "100%", backgroundImage: "linear-gradient(#93A5CF,#E4EfE9)" }}
                className="d-flex justify-content-center"
            >
                <div className="container shadow p-0 m-5" style={{ width: "75%" }}>
                    <Link to={"/"} className="text-decoration-none text-light">
                        Back to Home
                    </Link>
                    <div className="p-2" style={{ backgroundColor: "#ffffff49" }}>
                        <div className="row align-items-center">
                            <div className="col-lg-5 sm-img">
                                <img
                                    src="https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    width={400}
                                    alt=""
                                />
                            </div>

                            <div className="col-lg-7 p-5">
                                <div className="d-flex justify-content-center flex-column">
                                    <div className="d-flex mt-2 text-dark"></div>
                                    <h2 className="text-dark">
                                        {registerform ? "Create an account" : "Hi, Welcome Back!👋"}
                                    </h2>
                                    <form className="w-100 text-dark fw-bold mt-5">
                                        {registerform && (
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label>User name</Form.Label>
                                                <Form.Control
                                                    id="Transparant"
                                                    type="text"
                                                    placeholder="Enter Your Username"
                                                    value={useData.username}
                                                    onChange={(e) => {
                                                        setUseData({ ...useData, username: e.target.value });
                                                    }}
                                                />
                                            </Form.Group>
                                        )}
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                id="Transparant"
                                                type="email"
                                                placeholder="example@gmail.com"
                                                value={useData.email}
                                                onChange={(e) => {
                                                    setUseData({ ...useData, email: e.target.value });
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                id="Transparant"
                                                type="password"
                                                placeholder="Enter Your Password"
                                                value={useData.password}
                                                onChange={(e) => {
                                                    setUseData({ ...useData, password: e.target.value });
                                                }}
                                            />
                                        </Form.Group>

                                        {registerform ? (
                                            <div>
                                                <Button
                                                    type="submit"
                                                    className="btn btn-dark "
                                                    id="full_btn"
                                                    onClick={handleregistration}
                                                >
                                                    Sign Up
                                                </Button>
                                                <span className="h6 ps-3"> Already a User?</span>
                                                <Link className="ps-2 h6 fw-bold text-primary" to={"/login"}>
                                                    Sign In
                                                </Link>
                                            </div>
                                        ) : (
                                            <div>
                                                <Button
                                                    type="submit"
                                                    className="btn btn-dark"
                                                    id="full_btn"
                                                    onClick={handleLogin}
                                                >
                                                    Sign In
                                                </Button>
                                                <span className="h6 ps-3">New User? </span>
                                                <Link className="ps-1 h6 fw-bold text-primary" to={"/Register"}>
                                                    Sign Up
                                                </Link>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer position="bottom-center" theme="dark" /> */}
            </div>
        </>
    );
}

export default Auth;
