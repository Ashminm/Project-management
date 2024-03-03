import React, { useState, createContext } from "react";

export const addProjectResponseConext = createContext();
export const editProjectResponseConext = createContext();

function ContextShare({ children }) {
    const [addProjectRespnse, setAddProjectResponse] = useState({});
    const [editProjectRespnse, setEditProjectResponse] = useState({});

    return (
        <>
            <addProjectResponseConext.Provider value={{ addProjectRespnse, setAddProjectResponse }}>
                <editProjectResponseConext.Provider value={{ editProjectRespnse, setEditProjectResponse }}>
                    {children}
                </editProjectResponseConext.Provider>
            </addProjectResponseConext.Provider>
        </>
    );
}

export default ContextShare;
