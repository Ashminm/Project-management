import { commonApi } from "./commonApi";
import { BASE_URL } from "./baseUrl";

export const registerApi = async (data) => {
    return await commonApi("POST", `${BASE_URL}/user/register`, data, "");
};

export const loginApi = async (data) => {
    return await commonApi("POST", `${BASE_URL}/user/login`, data, "");
};

export const addProjectApi = async (data, headers) => {
    return await commonApi("POST", `${BASE_URL}/project/addproject`, data, headers);
};

export const userProjects = async (Header) => {
    return await commonApi("GET", `${BASE_URL}/user/projectlist`, "", Header);
};

export const homeProjects = async () => {
    return await commonApi("GET", `${BASE_URL}/home/projects`, "", "");
};

export const allProjects = async (Header,search) => {
    return await commonApi("GET", `${BASE_URL}/project/projects?search=${search}`, "",Header);
};

export const editProjectApi = async (Headers,body,id) => {
    return await commonApi("PUT", `${BASE_URL}/user/editProject/${id}`,body,Headers);
};

export const deleteProjectApi = async (Headers,id) => {
    return await commonApi("DELETE", `${BASE_URL}/user/deleteproject/${id}`,{},Headers);
};

export const profileUpdateApi = async (headers,body,id)=>{
    return await commonApi("PUT",`${BASE_URL}/user/updateprofile/${id}`,body,headers)
}