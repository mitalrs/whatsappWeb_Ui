import React from "react";
import Chatbg from "../assets/whatsapp-bg.png";
import ChatInput from "./ChatInput";
import ChatSectionHeader from "./ChatSectionHeader";
import RecievedChatMessage from "./RecievedChatMessage";
import SendedChatMessage from "./SendedChatMessage";

function RightComponent() {
  return (
    <div className="grow flex flex-col relative">
      <ChatSectionHeader />

      {/* chat */}
      <div
        className="flex-grow flex-col mt-[59px] mb-[62px] overflow-y-auto bg-[#efeae2]"
        style={{
          backgroundImage: `url(${Chatbg})`,
        }}
      >
        <SendedChatMessage />
        <RecievedChatMessage />
      </div>

      <ChatInput />
    </div>
  );
}

export default RightComponent;
