import { createContext, useContext, useState } from "react";

export const CheckboxContext = createContext();

export const CheckboxBtnContainer = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <CheckboxContext.Provider value={{ isChecked, toggleChecbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = () => {
  return useContext(CheckboxContext);
};
