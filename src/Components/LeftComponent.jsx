import React from "react";
import ChatList from "./ChatList";
import ChatsHeader from "./ChatsHeader";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { GlobalContext } from "../App";

function LeftComponent() {
  const { showLeft } = useContext(GlobalContext);
  return (
    <div className={`md:flex flex-col w-screen md:max-w-[480px] md:w-[40%] grow-0 shrink-0 md:basis-[40%] bg-[#fffff] min-w-[330px] ${showLeft ? 'flex' : 'hidden'}`}>
      <ChatsHeader />
      <Searchbar />
      <ChatList />
    </div>
  );
}

export default LeftComponent;
