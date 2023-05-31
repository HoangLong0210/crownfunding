import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col lg:gap-y-3 mb-4 lg:mb-5 gap-y-2">
      {children}
    </div>
  );
};

export default FormGroup;
