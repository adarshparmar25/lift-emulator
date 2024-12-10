import React from "react";
import { Grid, Box } from "@mui/material";

const Floor = ({ floor }) => {
  return (
    <Grid
      container
      sx={{
        height: "12.5%",
        borderBottom: floor > 1 ? "1px solid #dcdcdc" : "none",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {floor}
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4px",
            paddingLeft: "10px",
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#ecf0f1",
                borderRadius: "2px",
                border: "1px solid #bdc3c7",
              }}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Floor;
