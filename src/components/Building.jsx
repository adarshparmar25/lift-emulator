import React from "react";
import { Box } from "@mui/material";
import Floor from "./Floor.jsx";
import Lift from "./Lift.jsx";

const Building = ({ floors, liftPosition }) => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "300px" },
        backgroundColor: "#e74c3c",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "20%",
          width: "60px",
          height: "100%",
          backgroundColor: "#34495e",
        }}
      >
        <Lift liftPosition={liftPosition} totalFloors={floors.length} />
      </Box>

      {floors.map((floor) => (
        <Floor key={floor} floor={floor} />
      ))}
    </Box>
  );
};

export default Building;
