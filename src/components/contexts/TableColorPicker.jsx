import { createContext, useState } from "react";

const TableColorPicker = createContext(); // { }

export const TableColorPickerProvider = ({ children }) => {
  const [color, setColor] = useState("ff0000");
  return (
    <TableColorPicker.Provider value={{ color, setColor }}>
      {children}
    </TableColorPicker.Provider>
  );
};

export default TableColorPicker;
