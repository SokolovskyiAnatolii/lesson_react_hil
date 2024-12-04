import React, { useState } from "react";

import Container from "@mui/material/Container";
import Table from "./components/Table/Table";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import TableColorPicker from "./components/contexts/TableColorPicker";

export default function App() {
  const [color, setColor] = useState("#ff0000");
  return (
    <Container>
      <TableColorPicker.Provider value={{ color, setColor }}>
        <ColorPicker />
        <Table listName="todos" />
      </TableColorPicker.Provider>
    </Container>
  );
}
