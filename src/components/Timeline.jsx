/* eslint-disable react/jsx-key */
// import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  // Here we will iterate through the TimelineItems, like in portfolio.
  return (
    // El padding p-20 es la clave para que no se malogre el timeline
    <div className="flex flex-col md:flex-row justify-center my-20 px-16">
      <div className=" w-full md:w-9/12">
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
