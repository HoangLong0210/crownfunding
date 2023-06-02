import React from "react";
import classNames from "utils/classNames";

const CampaignDescription = ({ children, className = "text-xs mb-4" }) => {
  return (
    <p className={classNames("text-text3 font-normal", className)}>
      {children}
    </p>
  );
};

export default CampaignDescription;
