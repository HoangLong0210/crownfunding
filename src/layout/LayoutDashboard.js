import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/parts/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-liteBG min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-[20px] outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute z-10 right-10 top-[10px] text-text1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="text-sm font-medium text-text2 mb-[10px]">
          Enter the contribute amount
        </p>
        <input
          type="text"
          placeholder="$100 |"
          name="amount"
          className="text-sm font-medium py-[15px] px-[25px] border border-strock w-full rounded-[10px] mb-5"
        />
        <p className="text-sm text-text3 mb-5">
          Contribution are not associatied with perks
        </p>
        <Button
          kind="primary"
          className="text-base py-[13px] px-11 font-semibold "
        >
          Continue
        </Button>
        <div className="mt-[60px]">
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopBar></DashboardTopBar>
      <div className="flex gap-x-10 items-start">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
