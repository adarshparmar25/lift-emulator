import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

const ButtonPanel = ({ floors, requests, onRequest, direction }) => {
  return (
    <Box
      sx={{
        marginLeft: 4,
        padding: 2,
        backgroundColor: "#d3d3d3",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "black" }}>
          Button Panel
        </Typography>
        {direction && (
          <Box
            sx={{
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: direction === "up" ? "green" : "red",
              color: "white",
              borderRadius: 4,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5">
              {direction === "up" ? "↑" : "↓"}
            </Typography>
          </Box>
        )}
      </Box>

      <Grid container spacing={2}>
        {floors.map((floor) => (
          <Grid item xs={4} key={floor}>
            <Button
              variant="contained"
              color={requests.includes(floor) ? "secondary" : "primary"}
              onClick={() => onRequest(floor)}
              sx={{ width: "100%" }}
            >
              {floor}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ButtonPanel;
