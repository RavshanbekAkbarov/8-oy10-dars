import React from "react";

function FromInput({ type, label, placeholder, name, value }) {
  return (
    <label className="form-control w-full mb-2">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input input-bordered w-full "
      />
    </label>
  );
}

export default FromInput;
