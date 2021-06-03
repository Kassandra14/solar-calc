import React from "react";


// This file exports the Input and TextArea, for user input.

export function Input(address) {
  return (
    <div className="form-group">
      <input className="form-control" {...address} />
    </div>
  );
}

export function TextArea(address) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...address} />
    </div>
  );
}




