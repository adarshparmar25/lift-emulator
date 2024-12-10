import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Building from "./components/Building.jsx";
import ButtonPanel from "./components/ButtonPanel.jsx";

const App = () => {
  const floors = Array.from({ length: 8 }, (_, i) => 8 - i);
  const [liftPosition, setLiftPosition] = useState(1);
  const [requests, setRequests] = useState([]);
  const [direction, setDirection] = useState(null);

  const requestFloor = (floor) => {
    setRequests((prev) => [...prev, floor]);
  };

  useEffect(() => {
    if (requests.length > 0) {
      const [firstRequest, ...remainingRequests] = requests;

      if (liftPosition === firstRequest) {
        setRequests(remainingRequests);
        return;
      }

      setDirection(firstRequest > liftPosition ? "up" : "down");

      const moveDelay = Math.abs(firstRequest - liftPosition) * 1000;

      const timer = setTimeout(() => {
        setLiftPosition(firstRequest);
        setRequests((prev) => prev.slice(1));
        setDirection(null);
      }, moveDelay);

      return () => clearTimeout(timer);
    }
  }, [requests, liftPosition]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Building floors={floors} liftPosition={liftPosition} />
      <ButtonPanel
        floors={floors}
        requests={requests}
        onRequest={requestFloor}
        direction={direction}
      />
    </Box>
  );
};

export default App;
