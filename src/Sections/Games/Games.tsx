import React from "react";
import { Grid, Stack } from "@mui/material";
import TopInfo from "./components/TopInfo";
import GameContainer from "./components/GameContainer";
import TestPoza from "./../../shared/images/test_poza_equi.png";
import GridBackground from "../../components/GridBackground";

const Games: React.FC = () => (
  <Grid
    container
    sx={{
      width: "100vw",
      padding: {
        xs: "32px",
        md: "32px 0px",
      },
      background: "linear-gradient(88.66deg, #0F2A71 -2.04%, #00173F 100.39%)",
      alignItems: "center",
      justifyContent: "center",
      position: 'relative'
    }}
  >
    <Grid
      container
      item
      xs={12}
      md={10}
      sx={{
        // background: 'red'
        gap: "32px",
        zIndex: '2'
      }}
    >
      <TopInfo />
      <Stack
        sx={{
            width: '100%',
            flexDirection: 'row',
            gap: '16px',
            flexWrap: 'wrap'
        }}
      >
        <GameContainer
            gamePhoto={TestPoza}
            gameStage="MVP"
            gameName="EQUISTAR"
            gameDescription="HORSE RACING"
            gameLink="https://equistar.estar.games"
        />
        <GameContainer
            gamePhoto={TestPoza}
            gameStage="MVP"
            gameName="EQUISTAR"
            gameDescription="HORSE RACING"
            gameLink="https://equistar.estar.games"
        />
        <GameContainer
            gamePhoto={TestPoza}
            gameStage="MVP"
            gameName="EQUISTAR"
            gameDescription="HORSE RACING"
            gameLink="https://equistar.estar.games"
        />
        <GameContainer
            gamePhoto={TestPoza}
            gameStage="MVP"
            gameName="EQUISTAR"
            gameDescription="HORSE RACING"
            gameLink="https://equistar.estar.games"
        />
        <GameContainer
            gamePhoto={TestPoza}
            gameStage="MVP"
            gameName="EQUISTAR"
            gameDescription="HORSE RACING"
            gameLink="https://equistar.estar.games"
        />
      </Stack>
    </Grid>
    <GridBackground />
  </Grid>
);

export default Games;
