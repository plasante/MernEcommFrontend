import React from 'react';

// The Alert component can be used across the application.
// We promote reuse and separation of concerns.
const Alert = ({ type, children, condition }) => {
  const alertTypes = {
    error: "alert-danger",
    success: "alert-info",
    info: "alert-info" // add line for info type
  };

  return (
    <div
      className={`alert ${alertTypes[type]}`}
      style={{ display: condition ? "" : "none" }}
    >
      {children}
    </div>
  );
};

export default Alert;