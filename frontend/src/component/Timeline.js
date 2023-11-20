// import React from 'react';
import "./timeline.css";

const getStatus = (title,data) => {
  // if (data.Approved1) {
  //   return "Approved";
  // } else 
  if (title=="Initiated by you") {
    if(data.Approved1) return "Approved"
    // return "Pending"; 
  }
  if (title=="Initiated by you") {
    if(data.Rejected1) return "Rejected"
    return "Pending"; 
  }
  if (title=="HOD Approval") {
    if(data.Rejected1) return "Rejected"
    // return "Pending"; 
    if(data.Approved1) return "Approved";
    else return  "Pending";
  }
  // else if(title="HOD Approval"){
   
  //   return "Pending";
  // } else if(title="Dean Approval"){
  //   if(data.Approved2) return "Approved";
  //   return "Pending";
  // }
};

const TimelineItem = ({ title,data }) => {
  console.log(data);
  const status = getStatus(title,data);
  

  return (
    <div className="card1">
      <div className="info">
        <h3 className="title">{title}</h3>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

const Timeline = ({ data }) => (
  <div className="timeline">
    <div className="outer">
      <TimelineItem title="Initiated by you" data={data} />
      <TimelineItem title="HOD Approval" data={data} />
      {/* <TimelineItem title="Dean Approval" data={data} /> */}
    </div>
  </div>
);

export default Timeline;
