import React from "react";

function ChatMessageComponent({ type, message, time }) {
  const isSent = type === "sent";

  return (
    <div>
      {/* recieved message */}

      {
        <div className={`flex flex-row m-4 ${isSent && "justify-end"}`}>
          {!isSent && (
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
          )}
          <div
            className={`rounded-r-lg rounded-bl-lg flex-col  flex pt-[6px] md:max-w-2xl  pr-[7px] pb-[8px] pl-[9px] ${
              isSent ? "bg-[#c8fdc8]" : "bg-white "
            }`}
          >
            <div className="flex">
              <span className="text-[#111b21] text-[14.2px]">{message}</span>
              <span className="px-[4px] w-[54px]"></span>
            </div>
            <div className="flex items-end justify-end  float-right mb-[-5px] mt-[-10px]">
              <div className="font-normal text-[#667781] text-[11px]">
                {time}
              </div>
              <div></div>
            </div>
          </div>

          {isSent && (
            <span className="h-[2%] text-[#c8fdc8]">
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
                  d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                ></path>
                <path
                  fill="currentColor"
                  d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                ></path>
              </svg>
            </span>
          )}
        </div>
      }
    </div>
  );
}

export default ChatMessageComponent;
