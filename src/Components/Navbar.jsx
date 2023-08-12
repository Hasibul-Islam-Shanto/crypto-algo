/* eslint-disable react/prop-types */
import React from "react";

const algos = [
  {
    id: 1,
    name: "Ceasar Cipher",
    tag: "ceasar_cipher",
  },
  {
    id: 2,
    name: "Hill Cipher",
    tag: "hill_cipher",
  },
  {
    id: 3,
    name: "RSA",
    tag: "rsa",
  },
  {
    id: 4,
    name: "AES",
    tag: "aes",
  },
];
const Navbar = ({ activeAlgo, setActiveAlgo }) => {
  return (
    <React.Fragment>
      <div className="w-full shadow-md border flex justify-between rounded-lg mt-28">
        {algos.map((algo) => (
          <div
            key={algo.id}
            onClick={() => {
              setActiveAlgo(algo.tag);
            }}
            className={`w-full h-16 text-lg font-semibold  ${
              activeAlgo === algo.tag
                ? "bg-[#4A55A2] text-white"
                : "bg-[#eee] text-gray-800"
            }  flex justify-center items-center p-5 cursor-pointer border border-gray-300`}
          >
            <span>{algo.name}</span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
