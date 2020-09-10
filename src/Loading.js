import React from "react";
import loadingGif from "./images/arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>rooms data</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}
