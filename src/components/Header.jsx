import React from "react";
import {Dropdown, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function Header({ inDashboard }) {
    
    return (
        <div>
            <Navbar className="bg-body-tertiary position-fixed top-0 w-100 p-3" style={{ zIndex: "1",display:'flex',justifyContent:'space-between' }}>
               
                    <Link to={"/"} className="text-decoration-none">
                        <Navbar.Brand>
                            <i class="fa-brands fa-codepen fa-lg ps-5"></i> Project Fair
                        </Navbar.Brand>
                    </Link>
                    {inDashboard && (
                        <div >
                        <Dropdown drop="start">
                            <Dropdown.Toggle variant="light">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"
                                    width={35}
                                    alt="Logo"
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width:'330%',padding:'0'}}>
                                <Profile />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    
                    )}
                
            </Navbar>
        </div>
    );
}

export default Header;
