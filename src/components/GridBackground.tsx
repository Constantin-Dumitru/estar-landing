import React from "react";
import GridPattern from './../shared/images/grid-pattern.png'
import { Stack } from "@mui/material";

const GridBackground: React.FC = () => (
    <Stack
        sx={{
            background: `url(${GridPattern})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            backgroundSize: '4%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            opacity: '0.2',
            zIndex: '0'
        }}
    />
)

export default GridBackground