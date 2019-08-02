import React from "react";
import "./spinner.scss";

export function Spinner({ absolute }) {
  return (
    <div className={`spinner flex full-width align-center-center ${absolute && 'absolute'}`}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
