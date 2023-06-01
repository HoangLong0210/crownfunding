import React from "react";

const CampaignImage = ({
  className = "h-[158px]",
  image = "https://images.unsplash.com/photo-1519160558534-579f5106e43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
}) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CampaignImage;
