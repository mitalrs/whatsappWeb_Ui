import { useState, createContext } from "react";
import "./App.css";
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";

export const GlobalContext = createContext();

function App() {
  const [showLeft, setShowLeft] = useState(true);

  const toggle = () => {
    console.log("chal raha");
    setShowLeft(!showLeft);
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-[#00a884] h-[30%] w-full absolute top-0 -z-10"></div>
        <div className=" bg-gray-200 h-[70%] w-full absolute bottom-0 -z-10"></div>

        <div className="flex 2xl:w-[1600px] 2xl:h-[96%] h-screen w-screen bg-white md:min-w-[748px]">
          <GlobalContext.Provider value={{ toggle, showLeft }}>
            <LeftComponent />
            <RightComponent />
          </GlobalContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
