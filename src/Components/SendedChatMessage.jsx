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
        <div className="rounded-r-lg rounded-bl-lg bg-white flex p-1">
          <div className="text-[#111b21]">msg</div>
          <div className="text-[#667781] text-[10px] flex items-end ml-2 font-normal">15:23</div>
        </div>
      </div>
    </div>
  );
}

export default SendedChatMessage;
