import React, { useState } from "react";
import BlurContainer from "../../../components/BlurContainer";
import { EstarLogo } from "../../../shared/icons";
import NavLinks from "./NavLinks";
import { Stack } from "@mui/material";

const NavBar: React.FC = () => {
  const [openNav, setOpenNav] = useState(false)
  
  const handleClick = () => (
    setOpenNav(!openNav)
  )

  return (
    <BlurContainer
      sx={{
        width: "100%",
        flexDirection: "row",
        borderRadius: "1.25rem",
        padding: "24px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <EstarLogo sx={{ fill: "#F4C501", height: "24px", width: "auto" }} />
      {openNav && <NavLinks />}
      <Stack
        sx={{
          gap: "6px",
          ">*": {
            background: "#F4C501",
            width: "2.5rem",
            height: "3px",
            borderRadius: "2px",
            transition: 'all 0.2s ease-in-out'
          },
          '& > :nth-of-type(1)': {
            transform: openNav ? 'rotate(-45deg) translateY(6px)' : 'rotate(0deg)',
          },
          '& > :nth-of-type(2)': {
            transform: openNav ? 'rotate(45deg) translateY(-6px)' : 'rotate(0deg)',
          }
        }}
        onClick={handleClick}
      >
        <Stack />
        <Stack />
      </Stack>
    </BlurContainer>
  );
};

export default NavBar;
