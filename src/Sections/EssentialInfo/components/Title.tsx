import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const Title: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  let spacingValue = -4;
  if (isXs) {
    spacingValue = -2;
  } else if (isSm) {
    spacingValue = -6;
  } else if (isMd) {
    spacingValue = -8;
  } else if (isLg) {
    spacingValue = -12;
  }

  return (
    <Stack
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        alignItems: "center",
        // background: 'red'
      }}
      spacing={-2}
    >
      <Stack
        sx={{
          ">*": {
            background: "linear-gradient(180deg, #FFFFFF 0%, #999999 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: {
              // xs: "clamp(1.5rem, 20vw, 10.25rem)",
              xs: "64px !important",
              sm: "108px !important",
              md: "132px !important",
              lg: "164px !important",
            },
            fontWeight: "800 !important",
          },
          alignItems: "center",
        }}
        spacing={spacingValue}
      >
        <Typography>GAMING</Typography>
        <Typography>STUDIO</Typography>
      </Stack>
      <Typography
        sx={{
          textAlign: "center",
          width: "calc(90% - 32px)",
          color: "#999",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
    </Stack>
  );
};

export default Title;
