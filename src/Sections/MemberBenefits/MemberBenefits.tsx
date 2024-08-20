import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import BenefitContainer from "./components/BenefitContainer";

const MemberBenefits: React.FC = () => (
  <Grid
    container
    sx={{
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
      padding: {
        xs: "32px",
        md: "32px 0px",
      },
    }}
  >
    <Grid
      item
      container
      xs={12}
      md={10}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Stack sx={{ flexDirection: "column", alignItems: "center" }}>
        <SectionTitle
          firstWord="MEMBER"
          secondWord="BENEFITS"
          sx={{
            flexDirection: "row",
            gap: "16px",
          }}
        />
        <Typography color="#999">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Typography>
      </Stack>
      <Stack
        sx={{
            flexDirection: 'row',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '>*': {
                width: 'calc(33.3% - 16px) !important',
                height: 'max-content !important'
            }
        }}
      >
        <BenefitContainer
          title="Blockchain"
          description="Easy transfer of your assets and true ownership."
        />
        <BenefitContainer
          title="Join Community"
          description="Gain access to our amazing community and unlock the friendships."
        />
        <BenefitContainer
          title="Unlock Achievements"
          description="Earn awards for completing a range of difficult achievements."
        />
        <BenefitContainer
          title="Clans"
          description="Join together with your friends and become a legends."
        />
        <BenefitContainer
          title="Leaderboards"
          description="Win a position on our competitive leaderboards."
        />
      </Stack>
    </Grid>
  </Grid>
);

export default MemberBenefits;
