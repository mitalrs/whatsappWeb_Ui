import React from "react";

function ChatSectionHeader() {
  return (
    <div className="flex absolute top-0 justify-between items-center h-[59px] w-full bg-gray-200 px-4">
      <div className="w-[11%] h-[40px]">
        <img
          src="https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
          alt=""
          className="w-[40px] h-[40px] rounded-full"
        />
      </div>
      <div className="flex flex-grow ">userName</div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ml-4">
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className="text-[#54656f]"
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
          ></path>
        </svg>
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ml-2.5">
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className="text-[#54656f]"
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ChatSectionHeader;
