import React from "react";
import { DotLoader } from "react-spinners";

function Loader() {
  return (
    <div className="bg-black/20 fixed top-0 left-0 h-screen w-full z-50 flex items-center justify-center">
      <DotLoader color="#ffb528" />
    </div>
  );
}

export default Loader;
