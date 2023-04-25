import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader ">
      <InfinitySpin className="load" width="200" color="#ffaf76" />
    </div>
  );
};

export default Loader;