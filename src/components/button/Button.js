import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-y-transparent animate-spin"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={classNames(
        "font-semibold p-4 flex justify-center items-center text-base text-white min-h-[56px] rounded-xl",
        className,
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
