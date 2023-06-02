import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

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

  let defaultButtonClassName =
    " font-semibold p-4 flex justify-center items-center text-base min-h-[56px] rounded-xl";

  switch (rest.kind) {
    case "primary":
      defaultButtonClassName =
        defaultButtonClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultButtonClassName =
        defaultButtonClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultButtonClassName =
        defaultButtonClassName + " bg-secondary bg-opacity-20 text-secondary";
      break;

    default:
      break;
  }

  if (rest.href)
    return (
      <Link
        to={rest.href}
        className={classNames(defaultButtonClassName, className)}
      >
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={classNames(
        defaultButtonClassName,
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
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
