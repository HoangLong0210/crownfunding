import { Button } from "components/button";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignCategory from "modules/campaign/parts/CampaignCategory";
import CampaignDescription from "modules/campaign/parts/CampaignDescription";
import CampaignDetailAuthor from "modules/campaign/parts/CampaignDetailAuthor";
import CampaignImage from "modules/campaign/parts/CampaignImage";
import CampaignMeta from "modules/campaign/parts/CampaignMeta";
import CampaignPerk from "modules/campaign/parts/CampaignPerk";
import CampaignSupport from "modules/campaign/parts/CampaignSupport";
import CampaignTitle from "modules/campaign/parts/CampaignTitle";
import React, { Fragment } from "react";

const CampaignDetailPage = () => {
  return (
    <Fragment>
      <div
        className="h-[200px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, #000000 87.01%), url(/education.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-center gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage className="h-[398px] mb-8"></CampaignImage>
          <div className="flex justify-center gap-x-5">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                  alt=""
                  className="w-[89px] h-[70px] rounded-md object-cover"
                />
              ))}
          </div>
        </div>
        <div className="max-w-[443px] flex-1">
          <CampaignCategory
            text="Architecture"
            className="mb-4 text-sm"
          ></CampaignCategory>
          <CampaignTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampaignTitle>
          <CampaignDescription className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDescription>
          <CampaignDetailAuthor></CampaignDetailAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary "></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampaignMeta size="big"></CampaignMeta>
            <CampaignMeta size="big"></CampaignMeta>
            <CampaignMeta size="big"></CampaignMeta>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white p-5 border-b border-b-slate-100 mb-6 mt-[100px]">
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button kind="primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="text-lg font-semibold uppercase mb-5">Story</h2>
          <div className="bg-white w-full"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignDetailPage;
