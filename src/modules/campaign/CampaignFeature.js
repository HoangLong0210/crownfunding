import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampaignImage className="h-[266px] flex-1"></CampaignImage>
      <div className="max-w-[435px] flex-1">
        <CampaignCategory
          text="Architecture"
          className="mb-4 text-sm"
        ></CampaignCategory>
        <CampaignTitle className="font-bold text-xl mb-4">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDescription className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDescription>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="h-full w-2/4 rounded-full bg-primary "></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampaignMeta size="big"></CampaignMeta>
          <CampaignMeta size="big"></CampaignMeta>
          <CampaignMeta size="big"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
