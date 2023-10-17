import ProjectContext from "./Contexts";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom
export default function Project_states(props){
    const [username, setusername] = useState("");
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        console.log("show alert called");
        setAlert({
          message: message,
          type: type,
        });
     console.log("yaha aara hu ", alert);
        setTimeout(() => {
          setAlert(null);
        }, 2000);
      };  
      return ( 
        <ProjectContext.Provider
          value={{
           
            username,
            setusername,
            
           
            showAlert,
            alert
          }}
        >
          {props.children}
        </ProjectContext.Provider>
      );
}
 
