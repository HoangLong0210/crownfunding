import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center py-4 border border-strock rounded-xl gap-x-3 w-full text-text2 text-base font-semibold mb-5 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img
        srcSet="./icon-google.png 2x"
        alt="icon-google"
        className="w-6 h-6"
      />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
