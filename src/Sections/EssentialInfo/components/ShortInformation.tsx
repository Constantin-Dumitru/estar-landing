import React from "react";
import { Grid, Typography } from "@mui/material";
import Information from "./Information";

const ShortInformation: React.FC = () => (
  <Grid
    container
    sx={{
      width: "100%",
      background:
        "linear-gradient(90.29deg, rgba(15, 42, 113, 0.7) 0.07%, rgba(0, 23, 63, 0.7) 99.75%)",
      // background: 'red',
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 0px",
      backdropFilter: "blur(4px)",
    }}
  >
    <Grid
      item
      container
      xs={12}
      md={10}
      sx={{
        alignItems: "center",
        // background: 'blue',
        '>*':{
            width: 'calc(33.3% - 32px)'
        },
        gap: '32px',
        justifyContent: 'space-between',
        // background: 'green'
      }}
    >
      <Information
        title="Play to Earn"
        text="Play, earn tokens, upgrade your experience become a legend."
      />

      <Information
        title="Community Driven"
        text="Be part of our community and help us make the best decision moving fwd."
      />
      <Information
        title="Something for Everyone"
        text="Whether you’re a fighter, adventurer, builder or manager we have the right game for you."
      />
    </Grid>
  </Grid>
);

export default ShortInformation;
