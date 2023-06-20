import React from "react";
import ChatsHeader from "./ChatsHeader";
import Searchbar from "./Searchbar";

function LeftComponent() {
  return (
    <div className="max-w-[45%] grow-0 shrink-0 basis-[45%] bg-[#fffff] min-w-[330px]">
      <ChatsHeader />
      <Searchbar />
    </div>
  );
}

export default LeftComponent;
