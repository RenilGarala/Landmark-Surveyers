import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 w-full bg-white mb-5 grid items-center">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between  items-center px-8 py-3"
      >
        <span className="text-2xl">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <svg
            className="fill-black shrink-0 ml-5"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-lg px-8 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden leading-8 ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
