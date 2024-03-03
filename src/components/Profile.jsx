import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { profileUpdateApi } from "../services/allApis";
import { BASE_URL } from "../services/baseUrl";

function Profile() {
    const [profile, setProfile] = useState({
        username: JSON.parse(localStorage.getItem("currentUser")).username,
        password: JSON.parse(localStorage.getItem("currentUser")).password,
        email: JSON.parse(localStorage.getItem("currentUser")).email,
        github: JSON.parse(localStorage.getItem("currentUser")).github,
        linkedin: JSON.parse(localStorage.getItem("currentUser")).linkedin,
        image: ""
    });
    // console.log(localStorage.getItem('currentUser').username);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (profile.image) {
            setPreview(URL.createObjectURL(profile.image));
        }
        else{
            if(JSON.parse(localStorage.getItem('currentUser')).image){
                setPreview(`${BASE_URL}/upload/${JSON.parse(localStorage.getItem('currentUser')).image}`)
            }
            else{
                setPreview("")
            }
        }
        // console.log(preview);
    }, [profile.image]);

    const handleProfileUpdate = async()=>{
        const {username,password,email,image,linkedin,github}=profile
        if(!username || !password || !email || !image || !linkedin || !github ){
            toast.info("enter valid Data")
            console.log(username,password,email,github,linkedin,image);
            console.log(profile);
        }
        else{
            const reqBody=new FormData()
            reqBody.append('username',username)
            reqBody.append('password',password)
            reqBody.append('email',email)
            reqBody.append('github',github)
            reqBody.append('linkedin',linkedin)
            reqBody.append('image',image)
            console.log(reqBody);
            const id=JSON.parse(localStorage.getItem('currentUser'))._id
            console.log(profile);
            if(preview){
                const reqHeader={
                    "Content-Type":"multipart/form-data" , "Authorization":`bearer ${localStorage.getItem("token")}`
                }
                const result=await profileUpdateApi(reqHeader,reqBody,id)
                if(result.status===200){
                    toast.success("Profile Updated!!")
                    navigate('/login')
                 
                }
                else{
                    toast.error("Updation Failed!!")
                }
            }
            else{
                const reqHeader={
                    "Content-Type":"application/json" , "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
                const result=await profileUpdateApi(reqHeader,reqBody,id)
                if(result.status===200){
                    toast.success("Profile Updated!!")
                  
                }
                else{
                    toast.error("Updation Failed!!")
                }
            }
        }
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };
    return (
        <div className="card shadow p-4 " style={{ backgroundImage: "linear-gradient(#E4EfE9 ,#93A5CF)" }}>
            <div className="mt-3 row">
                <label htmlFor="profile" className="text-center">
                    <input
                        type="file"
                        id="profile"
                        className="d-none"
                        // defaultValue={profile.image}
                        onChange={(e) => setProfile({ ...profile, image: e.target.files[0] })}
                    />
                    <img
                        src={preview ? preview : "https://cdn-icons-png.flaticon.com/256/3135/3135715.png"}
                        style={{ borderRadius: "50%" }}
                        width={80}
                        height={80}
                        alt=""
                    />
                </label>
                <div className="mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        id="Transparant"
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        defaultValue={profile.username}
                    />
                </div>
                <div className="mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Github ID"
                        id="Transparant"
                        onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                        defaultValue={profile.github}
                    />
                </div>
                <div className="mt-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your LinkedIn ID"
                        id="Transparant"
                        onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                        defaultValue={profile.linkedin}
                    />
                </div>
            
                <div className="mt-1 mb-3  btn btn-dark" onClick={handleProfileUpdate}>
                    Save
                </div>
                <hr />
                <div className=" btn-light" style={{ cursor: "pointer" }} onClick={handleLogout}>
                    <div className="">
                        <i
                            class="fa-solid fa-right-from-bracket fa-ms rounded text-dark p-2 me-3"
                            style={{ backgroundColor: "#cccac6 " }}
                        ></i>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
