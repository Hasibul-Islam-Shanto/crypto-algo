import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import CeaserCipher from "./Components/Ceasar_cipher/CeaserCipher";

const App = () => {
  const [activeAlgo, setActiveAlgo] = useState("ceasar_cipher");
  return (
    <React.Fragment>
      <div className="w-full min-h-screen flex justify-center">
        <div className="w-[70%] flex flex-col items-start ">
          <Navbar activeAlgo={activeAlgo} setActiveAlgo={setActiveAlgo} />
          {activeAlgo === "ceasar_cipher" && <CeaserCipher />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
