import React from "react";

const Checkbox = ({
  checked = true,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5 mb-5">
      <div
        className={`inline-flex w-5 h-5 rounded border cursor-pointer  items-center justify-center text-white ${
          checked
            ? "border-primary bg-primary"
            : "border-text4 dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          name={name}
          className="hidden"
          onChange={() => {}}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 "
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label
          htmlFor={name}
          onClick={onClick}
          className="font-medium text-sm text-text2 cursor-pointer"
        >
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
