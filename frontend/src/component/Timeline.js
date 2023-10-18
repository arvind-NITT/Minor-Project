import React from 'react';
import "./timeline.css";
const TimelineItem = ({ title, status }) => (
  <div className="card1">
    <div className="info">
      <h3 className="title">{title}</h3>
      <p>{status}</p>
    </div>
  </div>
);

const Timeline = ({ data }) => (
  <div className="timeline">
    <div className="outer">
      {data.map((item, index) => (
        <TimelineItem key={index} title={item.title} status={item.status} />
      ))}
    </div>
  </div>
);

export default Timeline;
