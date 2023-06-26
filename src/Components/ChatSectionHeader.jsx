import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../App";
import { Menu, Transition } from "@headlessui/react";

function dropDown(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ChatSectionHeader() {
  const { showLeft, toggle } = useContext(GlobalContext);

  return (
    <div className="flex absolute top-0 justify-between items-center h-[59px] w-full bg-gray-200 px-4">
      <div className="w-[25%] h-[40px] md:w-[11%] flex justify-center items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
          alt="back"
          className="h-[20px] w-[20px] md:hidden md:h-[0px] md:w-[0px]"
          onClick={toggle}
        />
        <img
          src="https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
          alt=""
          className="w-[40px] h-[40px] rounded-full m-2"
        />
      </div>
      <div className="flex flex-grow">userName</div>

      {/* chat search icon */}
      {/* <div className="w-[40px] h-[40px] flex justify-center items-center ml-4">
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className="text-[#54656f]"
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
          ></path>
        </svg>
      </div> */}

      {/* chat more icon */}
      <div className="w-[40px] h-[40px] flex justify-center items-center ml-2.5">
        <Menu as="div" className="relative inline-block">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-full bg-gray-200 px-2 py-2 text-sm active:bg-[#c4c9cc]">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className="text-[#54656f]"
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                ></path>
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={toggle}
                      className={dropDown(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Close chat
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={dropDown(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      clear messages
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={dropDown(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Delete chat
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={dropDown(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Block
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default ChatSectionHeader;
