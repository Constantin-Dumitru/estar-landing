import React from "react";
import { Typography } from "@mui/material";
import BlurContainer from "../../../components/BlurContainer";
import { ArrowIcon } from "../../../shared/icons";

const ScrollDown: React.FC = () => (
    <BlurContainer
        sx={{
            padding: '1rem',
            borderRadius: '20px',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            display: {
                xs: 'none',
                md: 'flex'
            }
        }}
    >
        <Typography>
            SCROLL DOWN
        </Typography>
        <ArrowIcon sx={{ fill: '#F4C501' }}/>
    </BlurContainer>
)

export default ScrollDown