import React from "react";

const SurviceCard = (props) => {

  return (
    <div>
      <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
        <div class="flex justify-center mb-6">
          <img
            width="50"
            height="50"
            src={props.path}
            alt="mapping-img"
          />
        </div>
        <div>
          <h2 class="text-2xl font-sans tracking-wider">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default SurviceCard;
