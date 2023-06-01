import React from "react";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignImage from "./parts/CampaignImage";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignAuthor from "./parts/CampaignAuthor";

const CampaignItem = () => {
  return (
    <div className="shadow-sdsecondary">
      <CampaignImage></CampaignImage>
      <div className="px-5 py-4">
        <CampaignCategory></CampaignCategory>
        <CampaignTitle> Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDescription>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDescription>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampaignMeta></CampaignMeta>
          <CampaignMeta></CampaignMeta>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
