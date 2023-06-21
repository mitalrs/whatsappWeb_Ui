import React from "react";

function SendedChatMessage() {
  return (
    <div>
      <div className="flex flex-row m-2">
        <span className="h-[2%] text-white">
          <svg
            viewBox="0 0 8 13"
            height="13"
            width="8"
            preserveAspectRatio="xMidYMid meet"
            className=""
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 8 13"
            xmlSpace="preserve"
          >
            <path
              opacity="0.13"
              fill="#0000000"
              d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
            ></path>
            <path
              fill="currentColor"
              d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
            ></path>
          </svg>
        </span>
        <div className="rounded-r-lg rounded-bl-lg flex-col bg-white flex pt-[6px] pr-[7px] pb-[8px] pl-[9px]">
          <div className="flex">
            <span className="text-[#111b21] text-[14.2px]">msg</span>
            <span className="px-[4px] w-[54px]"></span>
          </div>
          <div className="flex items-end justify-end  float-right mb-[-5px] mt-[-10px]">
            <div className="font-normal text-[#667781] text-[11px]">15:23</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendedChatMessage;
