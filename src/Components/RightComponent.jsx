import React from "react";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import ChatSectionHeader from "./ChatSectionHeader";

function RightComponent() {
  return (
    <div className="grow flex flex-col relative">
      <ChatSectionHeader />

     <ChatBox />
     

      <ChatInput />
    </div>
  );
}

export default RightComponent;
