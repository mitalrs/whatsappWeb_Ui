import React from 'react'

function ArchivedBar() {
  return (
    <div className="bg-white border-r-gray-200 border h-[49px] flex justify-between px-2">
    <div className="p-3  text-[#00a884]">
      <svg
        viewBox="0 0 20 20"
        height="20"
        width="20"
        preserveAspectRatio="xMidYMid meet"
        className=""
        fill="none"
      >
        <path
          d="M18.54 3.23L17.15 1.55C16.88 1.21 16.47 1 16 1H4C3.53 1 3.12 1.21 2.84 1.55L1.46 3.23C1.17 3.57 1 4.02 1 4.5V17C1 18.1 1.9 19 3 19H17C18.1 19 19 18.1 19 17V4.5C19 4.02 18.83 3.57 18.54 3.23ZM4.24 3H15.76L16.57 3.97H3.44L4.24 3ZM3 17V6H17V17H3ZM11.45 8H8.55V11H6L10 15L14 11H11.45V8Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div className="flex items-center w-[215px] text-[#111b21]">Archived</div>
    <div className="p-3 text-[11px] flex justify-center items-center font-semibold text-[#25d366]">
      60
    </div>
  
  </div>
  )
}

export default ArchivedBar