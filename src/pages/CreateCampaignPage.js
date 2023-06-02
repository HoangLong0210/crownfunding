import LayoutDashboard from "layout/LayoutDashboard";
import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React from "react";

const CreateCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNew></CampaignAddNew>
    </LayoutDashboard>
  );
};

export default CreateCampaignPage;
