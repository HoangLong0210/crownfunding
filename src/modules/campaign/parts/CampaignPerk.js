import React from "react";
import CampaignTitle from "./CampaignTitle";
import { Button } from "components/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="h-[232px] object-cover w-full"
        />
        <div className="p-5">
          <span className="inline-block text-xs font-medium text-white bg-secondary py-1 px-3 rounded-sm mb-5">
            Featured
          </span>
          <CampaignTitle className="font-semibold text-xl mb-[5px]">
            Special One Camera
          </CampaignTitle>
          <div className="flex items-center gap-x-[5px] mb-4">
            <span className="font-bold text-xl text-text1">$2,724 USD</span>{" "}
            <span className="text-sm font-medium text-error line-through">
              $1,504 USD
            </span>
            <span className="text-sm font-medium text-error">(12% OFF)</span>
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <strong className="font-medium text-base text-text1">
              Estimated Shipping
            </strong>
            <span className="text-sm text-text2">October 2022</span>
          </div>
          <p className="mb-4 font-medium text-sm text-text2">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="font-medium text-sm text-text2">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full" kind="secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
