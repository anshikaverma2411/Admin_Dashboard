import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        // currentColor,
        // currentMode,
        activeMenu,
        // screenSize,
        // setScreenSize,
        // handleClick,
        // isClicked,
        // initialState,
        // setIsClicked,
        setActiveMenu,
        //setCurrentColor,
        // setCurrentMode,
        // setMode,
        // setColor,
        // themeSettings,
        // setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
