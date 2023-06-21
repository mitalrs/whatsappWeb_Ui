import React from "react";
import ChatList from "./ChatList";
import ChatsHeader from "./ChatsHeader";
import Searchbar from "./Searchbar";

function LeftComponent() {
  return (
    <div className="flex flex-col max-w-[480px] w-[40%] grow-0 shrink-0 basis-[40%] bg-[#fffff] min-w-[330px]">
      <ChatsHeader />
      <Searchbar />
      <ChatList />
    </div>
  );
}

export default LeftComponent;
