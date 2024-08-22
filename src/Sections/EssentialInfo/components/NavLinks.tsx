import React from "react";
import { Stack, Link } from "@mui/material";

const NavLinks: React.FC = () => (
    <Stack
        sx={{
            flexDirection: 'row',
            gap: '1rem',
            '>*': {
                fontFamily: 'Montserrat, Arial, sans-serif',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                '&::after': {
                    content: '" "',
                    width: '0%',
                    background: '#F4C501',
                    height: '2px',
                    display: 'flex',
                    transition: 'all 0.2s ease-in-out'
                },
                '&:hover': {
                    '&::after': {
                        width: '100%',
                    }
                }
            }
        }}
    >
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
    </Stack>
)

export default NavLinks