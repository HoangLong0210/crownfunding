import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";
import { Link } from "react-router-dom";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className=" flex items-center gap-x-10 flex-1">
        <Link to="/" className="inline-block">
          <img src="/logo.png" alt="logo" />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFund></DashboardFund>
        <Button
          type="button"
          className="px-7"
          kind="secondary"
          href="/campaign/start-campaign"
        >
          Start a campaign
        </Button>
        <img src="/logo.png" alt="" className="rounded-full object-cover" />
      </div>
    </div>
  );
};

export default DashboardTopBar;
