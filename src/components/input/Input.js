import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({ control, name, type = "text", ...rest }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className="w-full py-4 px-6 border border-strock rounded-xl text-text1 text-sm font-medium placeholder:text-text4"
        {...field}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
