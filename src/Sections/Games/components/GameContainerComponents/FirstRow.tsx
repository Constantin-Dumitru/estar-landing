import React from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
    gameStage: string
    gamePhoto: string
}

const FirstRow: React.FC<Props> = ({gamePhoto, gameStage}) => (
    <Stack
        sx={{
            width: '100%',
            height: '70%',
            background: `url(${gamePhoto})`,
            // borderRadius: '20px 20px 0px 0px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            alignItems: 'flex-end'
        }}
    >
        <Stack
            sx={{
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.16)',
                borderRadius: '0px 0px 0px 20px',
                backdropFilter: 'blur(4px)'
            }}
        >
            <Typography>{gameStage}</Typography>
        </Stack>
    </Stack>
)

export default FirstRow