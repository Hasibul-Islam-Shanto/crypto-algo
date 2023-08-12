import React, { useState } from "react";

const CeaserCipher = () => {
  const [dataType, setDataType] = useState("text");
  console.log(dataType);
  return (
    <React.Fragment>
      <div className="w-full p-5 flex flex-col items-start justify-start">
        <div className="w-full flex flex-col items-start mt-4">
          <span className="text-md font-semibold text-gray-700">
            Select Data Type
          </span>
          <select
            onChange={(e) => setDataType(e.target.value)}
            className="w-full mt-2 bg-white border-2 p-2 px-2 rounded-md text-md focus:border-gray-400 focus:border-2"
          >
            <option value="text">Text</option>
            <option value="audio">Audio</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>
        {dataType === "text" ? (
          <div className="w-full flex flex-col items-start mt-4">
            <span className="text-md font-semibold text-gray-700">
              Input a text
            </span>
            <input
              type="text"
              className="w-full mt-2 bg-white border-2 p-2 px-2 rounded-md text-md focus:border-gray-400 focus:border-2"
            />
          </div>
        ) : (
          <div className="w-full flex flex-col items-start mt-4">
            <span className="text-md font-semibold text-gray-700">
              Input Image/Audio/Video
            </span>
            <input
              type="file"
              accept="image/*, audio/*, video/*"
              className="w-full mt-2 bg-white border-2 p-2 px-2 rounded-md text-md focus:border-gray-400 focus:border-2"
            />
          </div>
        )}
        <div className="w-full flex flex-col items-start mt-4">
          <span className="text-md font-semibold text-gray-700">
            Shift Size
          </span>
          <input
            type="number"
            className="w-full mt-2 bg-white border-2 p-2 px-2 rounded-md text-md focus:border-gray-400 focus:border-2"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CeaserCipher;
