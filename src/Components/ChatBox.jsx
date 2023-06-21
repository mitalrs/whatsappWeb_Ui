import React from "react";
import Chatbg from "../assets/whatsapp-bg.png";
import ChatMessageComponent from "./ChatMessageComponent";


function ChatBox() {
    const messages = [
        {
            type: "sent",
            message: "hii",
            time: "12:08",
        },
        {
            type: "recieved",
            message: "hello",
            time: "13:08",
        },
        {
            type: "sent",
            message: "how's u?",
            time: "13:09",
        },
    ];

  return (
    <div
      className="flex-grow flex-col mt-[59px] mb-[62px] overflow-y-auto bg-[#efeae2]"
      style={{
        backgroundImage: `url(${Chatbg})`,
      }}
    >

     {
        messages.map(
            (message,index)=>{
                return (
                    <ChatMessageComponent key={index} type={message.type} message={message.message} time={message.time}/>
                )
            }
        )
         
     }
    </div>
  );
}

export default ChatBox;
