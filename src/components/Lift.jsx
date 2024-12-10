import React from "react";
import { Box } from "@mui/material";

const Lift = ({ liftPosition, totalFloors }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "50px",
        height: "50px",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        lineHeight: "50px",
        transition: "top 1s ease-in-out",
        top: `${(totalFloors - liftPosition) * 13}%`,
        left: "5px",
        borderRadius: "4px",
      }}
    >
      Lift
    </Box>
  );
};

export default Lift;
