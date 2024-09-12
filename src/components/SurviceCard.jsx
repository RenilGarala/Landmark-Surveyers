import React from "react";

const SurviceCard = (props) => {

  return (
    <div>
      <div className="grid items-center text-center justify-center bg-white hover:shadow-lg  hover:scale-105 h-56 w-72 rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
        <img width="50" height="50" src={props.path} alt={`${props.title} image`} />

        </div>
        <div>
          <h2 className="text-2xl font-sans tracking-wider">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default SurviceCard;
