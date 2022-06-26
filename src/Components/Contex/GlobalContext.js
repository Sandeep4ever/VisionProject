import { createContext, useState } from "react";
const GlobalContext = createContext();
export default GlobalContext;

const GlobalState = (props) => {
  const [submitType, setsubmitType] = useState("");
  return (
    <GlobalContext.Provider value={{ submitType, setsubmitType }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export { GlobalState };
