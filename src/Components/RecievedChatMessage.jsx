import React from 'react'

function RecievedChatMessage() {
  return (
    <div>
      
      <div className="flex flex-row m-2 justify-end">
        
        <div className="rounded-l-lg rounded-br-lg bg-[#c8fdc8] flex p-1">
          <div className="text-[#111b21]">recieved msg</div>
          <div className="text-[#667781] text-[10px] flex items-end ml-2 font-normal">15:23</div>
        </div>
        <span className="h-[2%] text-[#c8fdc8]">
        <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13" xml:space="preserve"><path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path><path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path></svg>
        </span>
      </div>
    </div>
  )
}

export default RecievedChatMessage