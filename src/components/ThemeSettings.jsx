import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div
      className="
        top-0 
        fixed 
        right-0
        nav-item 
        w-screen 
        bg-half-transparent"
    >
      <div
        className="
          w-400
          h-screen 
          bg-white 
          float-right 
          dark:bg-[#484B52] 
          dark:text-gray-200"
      >
        <div
          className="
            p-4 
            flex 
            ml-4
            items-center 
            justify-between"
        >
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgba(153, 171, 180)", borderRadius: "50%" }}
            className="
              p-3 
              text-2xl 
              hover:drop-shadow-xl 
              hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div
          className="
            p-4 
            ml-4
            flex-col 
            border-t-1 
            border-color"
        >
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              value="Light"
              id="light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label
              htmlFor="light"
              className="
                ml-2
                text-md
                cursor-pointer"
            >
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              value="Dark"
              id="dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label
              htmlFor="darkt"
              className="
                ml-2
                text-md
                cursor-pointer"
            >
              Dark
            </label>
          </div>
        </div>
        <div
          className="
            p-4 
            ml-4
            flex-col 
            border-t-1 
            border-color"
        >
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="
                    mt-2
                    flex
                    gap-5
                    relative
                    items-center
                    cursor-pointer"
                >
                  <button
                    type="button"
                    className="
                      h-10
                      w-10
                      rounded-full
                      cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
