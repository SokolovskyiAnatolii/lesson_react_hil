import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TableColorPicker from "../contexts/TableColorPicker";

export default function ColorPicker() {
  const { color, setColor } = useContext(TableColorPicker);

  return (
    <Box sx={{ my: 2, p: 2 }} component={Paper}>
      <Typography variant="h6" gutterBottom>
        Color Picker
      </Typography>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </Box>
  );
}
