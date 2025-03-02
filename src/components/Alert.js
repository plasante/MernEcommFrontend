import React from 'react';

// The Alert component can be used across the application.
// We promote reuse and separation of concerns.
const Alert = ({ type, children, condition }) => {
  return (
    <div
      className={`alert ${type === "error" ? "alert-danger" : "alert-info"}`}
      style={{ display: condition ? "" : "none" }}
    >
      {children}
    </div>
  );
};

export default Alert;