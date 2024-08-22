import React from "react";
import { Stack, Link, Typography } from "@mui/material";

const NavLinks: React.FC = () => (
  <Stack direction={'row'} gap={'1rem'}>
    <Stack
      sx={{
        flexDirection: "row",
        gap: "1rem",
        ">*": {
          fontFamily: "Montserrat, Arial, sans-serif",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
          textTransform: "uppercase",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          "&::after": {
            content: '" "',
            width: "0%",
            background: "#F4C501",
            height: "2px",
            display: "flex",
            transition: "all 0.2s ease-in-out",
          },
          "&:hover": {
            "&::after": {
              width: "100%",
            },
          },
        },
      }}
    >
      <Link>Link</Link>
      <Link>Link</Link>
      <Link>Link</Link>
    </Stack>
    <Link
        sx={{
            textDecoration: 'none'
        }}
    >
      <Stack
        sx={{
            background: '#F4C501',
            borderRadius: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 20px',
            cursor: 'pointer',
            border: '2px solid #F4C501',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                background: '#FFDD60',
            }
        }}
      >
        <Typography color={'#00173F'}>ESTAR HUB</Typography>
      </Stack>
    </Link>
  </Stack>
);

export default NavLinks;
