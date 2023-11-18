// import ProjectContext from "./Contexts";
// import React, { useState, useEffect } from "react";

// export default function Project_states(props) {
//   const [username, setusername] = useState("");
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//       message: message,
//       type: type,
//     });

//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   };

//   const fetchDataFromBackend = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/tools/FetchFormsforlevel0",{
//         method: "GET", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*", 
//           "auth-token": localStorage.getItem("token"),
//         },
//       }); // Replace with your actual API URL
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//       } else {
//         showAlert("Failed to fetch data from the backend", "error");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       showAlert("An error occurred while fetching data", "error");
//     }
//   };

//   return (
//     <ProjectContext.Provider
//       value={{
//         username,
//         setusername,
        
//         showAlert,
//         alert,
//       }}
//     >
//       {props.children}
//     </ProjectContext.Provider>
//   );
// }


import ProjectContext from "./Contexts";
import React, { useState, useEffect } from "react";

export default function Project_states(props) {
  const [username, setusername] = useState("");
  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState([]);
  const [hodData,setHodData]=useState([]);
   // State to store form data
  const [timeline, setTimeline] = useState([]);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const fetchHodData=async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/tools/FetchFormsforlevel1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
        // body:{
        //   "Role":"HOD",
        //   "Department":"CA",
        // },
      });
      if(response.ok){
        const data = await response.json();
        console.log(data);
        let i=0;
        // let formattedData = data.AllForms.map((form) => ({
        //   Date: form.Date,
        //   File_no: form.File_no,
        //   send_to: form.send_to,
        //   Approved0:data.fromapp[i][0].Approved0,
        //   Approved1:data.fromapp[i][0].Approved1,
        //   Approved2:data.fromapp[i++][0].Approved2,
        // }));
        // setHodData(formattedData);
        // console.log(formattedData);
      }
      else {
        showAlert("Failed to fetch data from the backend", "error");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      showAlert("An error occurred while fetching data", "error");
    }
  };
  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tools/FetchFormsforlevel0", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
      });

      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Extract the relevant data from the response and format it as needed
        let i=0;
        let formattedData = data.AllForms.map((form) => ({
          Date: form.Date,
          File_no: form.File_no,
          send_to: form.send_to,
          Approved0:data.fromapp[i][0].Approved0,
          Approved1:data.fromapp[i][0].Approved1,
          Approved2:data.fromapp[i++][0].Approved2,
        }));
        setFormData(formattedData);

        console.log(formData);
       
      } else {
        showAlert("Failed to fetch data from the backend", "error");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      showAlert("An error occurred while fetching data", "error");
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        username,
        setusername,
        fetchDataFromBackend,
        fetchHodData,
        timeline,
        setTimeline,
        setFormData,
        formData, // Provide the formData in the context
        showAlert,
        alert,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}

