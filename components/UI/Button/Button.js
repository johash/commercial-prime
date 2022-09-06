import React from "react";

const Button = ({ children, primary, secondary, width }) => {
  let buttonWidth = "auto";
  if (width > 0) {
    buttonWidth = +width + "px";
  }

  return (
    <button
      style={{ width: buttonWidth }}
      className={`text-sm font-medium px-5 py-3 rounded-lg  ${
        primary
          ? "bg-gradient-to-r from-[#DBB659] to-[#A37C1C] text-white"
          : secondary
          ? "bg-gradient-to-r from-[#797979] to-[#000000] text-white"
          : "bg-transparent text-[#484848] border-[1px] border-[#CFCFCF]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
