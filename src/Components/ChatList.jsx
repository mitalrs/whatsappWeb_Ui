import React from "react";
import ArchivedBar from "./ArchivedBar";
import ChatUser from "./ChatUser";

function ChatList() {
  return (
    <div className="flex-grow flex flex-col overflow-y-auto">
      <ArchivedBar />
      <ChatUser />
    </div>
  );
}

export default ChatList;
