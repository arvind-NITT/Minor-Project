import ProjectContext from "./Contexts";
import React, { useState, useEffect } from "react";

export default function Project_states(props) {
  const [username, setusername] = useState("");
  const [alert, setAlert] = useState(null);
  const [formname, setFormname] = useState("");
  const [formnumber, setFormnumber] = useState("");
  const [status, setStatus] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tools/FetchFormsforlevel0"); // Replace with your actual API URL
      if (response.ok) {
        const data = await response.json();
        setFormname(data.formname);
        setFormnumber(data.formnumber);
        setStatus(data.status);
      } else {
        showAlert("Failed to fetch data from the backend", "error");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      showAlert("An error occurred while fetching data", "error");
    }
  };

  useEffect(() => {
    fetchDataFromBackend(); // Fetch data when the component mounts
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        username,
        setusername,
        formname,
        formnumber,
        status,
        showAlert,
        alert,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}

// import ProjectContext from "./Contexts";
// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom
// export default function Project_states(props){
//     const [username, setusername] = useState("");
//     const [alert, setAlert] = useState(null);
//     const showAlert = (message, type) => {
//         console.log("show alert called");
//         setAlert({
//           message: message,
//           type: type,
//         });
//      console.log("yaha aara hu ", alert);
//         setTimeout(() => {
//           setAlert(null);
//         }, 2000);
//       };  
//       const setup = async () => { 
//         const url = "http://localhost:5000/api/tools/sorteddata";
//         const response = await fetch(url, {
//           method: "GET", // *GET, POST, PUT, DELETE, etc.
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*", 
//             "auth-token": localStorage.getItem("token"),
//           },
//         });
//         const startup = await response.json();

//       }
//       return ( 
//         <ProjectContext.Provider
//           value={{
           
//             username,
//             setusername,
//             startup,
           
//             showAlert,
//             alert
//           }}
//         >
//           {props.children}
//         </ProjectContext.Provider>
//       );
// }
 
