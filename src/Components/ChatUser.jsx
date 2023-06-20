import React from "react";
import profile from "../assets/profile.svg";

function ChatUser() {
  return (
    <div className="flex h-[72px] ">
      <div className="p-4 flex items-center justify-center">
        <img
          src="https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
          alt="alt"
          className="h-[49px] w-[49px] rounded-full"
        />
      </div>
      <div className="flex flex-col flex-grow justify-center border-b border-r  border-r-gray-200">
        <div className="flex flex-row justify-between px-2 py-1">
          <p className="text-[#111b21]">User</p>
          <div className="text-xs text-[#8696a0]">time</div>
        </div>

        <div className="flex flex-row justify-between px-2">
          <div className="text-[#8696a0]">msg</div>
          <div className="text-[#8696a0]">m</div>
        </div>
      </div>
    </div>
  );
}

export default ChatUser;
