/* eslint-disable react/jsx-key */
// import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  // Here we will iterate through the TimelineItems, like in portfolio.
  return (
    // El padding p-20 es la clave para hacerlo cvr xd
    <div className="flex flex-col md:flex-row justify-center my-20 p-20">
      <div className="w-full md:w-7/12">
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
