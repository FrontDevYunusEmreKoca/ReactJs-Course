import React from "react";
import loading from "./Spinner@1x-1.7s-200px-200px.gif"
import "./Loading.css"

const Loading = () => {
  return (
    <React.Fragment>
      {" "}
      <img
        className="loading-gif"
        src={loading}
        alt=""
      />
    </React.Fragment>
  );
};

export default Loading;
