import React from "react";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import { useContext } from "react";
import { GlobalContext } from "../App";
import ChatSectionHeader from "./ChatSectionHeader";


function RightComponent() {
  const { showLeft } = useContext(GlobalContext);
  return (
    <div className={`grow flex-col relative ${!showLeft ? 'flex' : 'hidden'}`}>
      <ChatSectionHeader />

     <ChatBox />
     

      <ChatInput />
    </div>
  );
}

export default RightComponent;
