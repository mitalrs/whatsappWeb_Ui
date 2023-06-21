import React from "react";
import ArchivedBar from "./ArchivedBar";
import ChatUser from "./ChatUser";

function ChatList() {
  const users = [
    {
      userName: "userOne",
      lastMessege: "how's u?",
      type: "sent",
      time: "13:09",
      url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
    },
    {
      userName: "usertwo",
      lastMessege: "user two",
      type: "sent",
      time: "13:09",
      url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
    },
    {
      userName: "userthree",
      lastMessege: "user three",
      type: "recived",
      time: "13:09",
      url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
    },
    {
      userName: "userFour",
      lastMessege: "user five",
      type: "sent",
      time: "13:09",
      url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
    },
    {
      userName: "userFive",
      lastMessege: "note user",
      type: "recived",
      time: "13:09",
      url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
    },
  ]
  return (
    <div className="flex-grow flex flex-col overflow-y-auto">
      <ArchivedBar />


      {
        users.map(
            (user,index)=>{
                return (
                    <ChatUser key={index} user={user.userName} message={user.lastMessege} type={user.type} time={user.time} img={user.url}/>
                )
            }
        )
         
     }

     
    </div>
  );
}

export default ChatList;
