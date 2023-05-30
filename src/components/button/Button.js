import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, className = "" }) => {
  return (
    <button
      type={type}
      className={`font-semibold p-4 flex justify-center items-center text-base text-white rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
