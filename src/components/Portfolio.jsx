/* eslint-disable react/jsx-key */
// import React from "react";
// We import the data:
import portfolio from "../data/portfolio";
// We import the component item for Portfolio:
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          ></PortfolioItem>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
