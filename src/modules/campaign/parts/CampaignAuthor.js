import React from "react";

const CampaignAuthor = ({
  image = "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
  author = "Mahfuzul Nabil",
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={image} alt="" className="w-8 h-8 object-cover rounded-full" />
      <p className="text-xs text-text3">
        by <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
