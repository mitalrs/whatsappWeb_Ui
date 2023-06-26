import React from "react";
import Chatbg from "../assets/whatsapp-bg.png";
import ChatMessageComponent from "./ChatMessageComponent";

function ChatBox() {
  const messages = [
    {
      type: "sent",
      message: "Hi there!",
      time: "09:00",
    },
    {
      type: "recieved",
      message: "Hello! How can I assist you?",
      time: "09:01",
    },
    {
      type: "sent",
      message:
        "My name is Mital Sapkale, and I'm a fresher looking for a job in web development.",
      time: "09:02",
    },
    {
      type: "recieved",
      message:
        "Nice to meet you, Mital! What specific field of web development are you interested in?",
      time: "09:03",
    },
    {
      type: "sent",
      message:
        "I'm specifically interested in React development. I find it fascinating and enjoy building interactive user interfaces.",
      time: "09:04",
    },
    {
      type: "recieved",
      message:
        "That's great! React is a popular framework. Do you have any experience with React?",
      time: "09:05",
    },
    {
      type: "sent",
      message:
        "As a fresher, I have been studying React extensively and have completed a few projects on my own to apply my learning.",
      time: "09:06",
    },
    {
      type: "recieved",
      message:
        "That shows your dedication! Could you tell me a bit about your educational background?",
      time: "09:07",
    },
    {
      type: "sent",
      message:
        "Sure! I have a Bachelor's degree in Computer Science with a focus on web development. I have also taken online courses to further enhance my skills.",
      time: "09:08",
    },
    {
      type: "recieved",
      message:
        "Impressive qualifications, Mital! Are you familiar with any other web technologies apart from React?",
      time: "09:09",
    },
    {
      type: "sent",
      message:
        "Yes, I have a good understanding of HTML, CSS, and JavaScript. I have also worked with Node.js and Express.js for server-side development.",
      time: "09:10",
    },
    {
      type: "recieved",
      message:
        "That's a solid skill set! Are you open to working remotely or are you specifically looking for an on-site position?",
      time: "09:11",
    },
    {
      type: "sent",
      message:
        "I am open to both options. However, I believe remote work offers flexibility and enables me to collaborate effectively from any location.",
      time: "09:12",
    },
    {
      type: "recieved",
      message:
        "Understood. We do have some remote positions available. Could you share your portfolio or any projects you've worked on?",
      time: "09:13",
    },
    {
      type: "sent",
      message:
        "Certainly! Here is the link to my portfolio: [insert link]. It showcases the projects I have completed using React and other web technologies.",
      time: "09:14",
    },
    {
      type: "recieved",
      message:
        "Thank you, Mital. I will review your portfolio. Are you available for an interview next week?",
      time: "09:15",
    },
    {
      type: "sent",
      message:
        "Absolutely! I am available for an interview at your convenience. Please let me know the date and time.",
      time: "09:16",
    },
    {
      type: "recieved",
      message:
        "Great! I will get back to you with the details of the interview. Is there anything else you would like to add?",
      time: "09:17",
    },
    {
      type: "sent",
      message:
        "No, that covers everything. Thank you for considering my application. I look forward to hearing from you soon.",
      time: "09:18",
    },
    {
      type: "recieved",
      message:
        "You're welcome, Mital! We appreciate your interest. Have a wonderful day!",
      time: "09:19",
    },
  ];

  return (
    <div
      className="flex-grow flex flex-col-reverse mt-[59px] mb-[62px] overflow-y-auto bg-[#efeae2]"
      style={{
        backgroundImage: `url(${Chatbg})`,
      }}
    >
      {messages.reverse().map((message, index) => {
        return (
          <ChatMessageComponent
            key={index}
            type={message.type}
            message={message.message}
            time={message.time}
          />
        );
      })}
    </div>
  );
}

export default ChatBox;
