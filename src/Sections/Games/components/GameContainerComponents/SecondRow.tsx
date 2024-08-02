import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { PlayIcon } from "../../../../shared/icons";

interface Props {
    gameName: string
    gameDescription: string
    gameLink?: string | null | undefined
}

const SecondRow: React.FC<Props> = ({gameName, gameDescription, gameLink = null}) => (
    <Stack
        sx={{
            height: '30%',
            width: '100%',
            background: 'linear-gradient(90deg, rgba(0, 23, 63, 0.4) 0%, rgba(10, 42, 113, 0.4) 100%)',
            backdropFilter: 'blur(1px)',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingX: '16px',
            // borderRadius: '0px 0px 20px 20px'
        }}
    >
        <Stack>
            <Typography sx={{fontSize: '20px'}}>{gameName}</Typography>
            <Typography color="#999">{gameDescription}</Typography>
        </Stack>

        <Link href={gameLink || 's'} target="_blank">
            <Stack
                sx={{
                    width: '48px',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                    background: gameLink ? '#3B8DF5' : '#999',
                    borderRadius: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: gameLink ? '2px solid #3B8DF5' : '2px solid #999',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        background: gameLink && 'rgba(0,0,0,0)',
                        transform: gameLink && 'scale(1.15)'
                    }
                }}
            >
                <PlayIcon sx={{fill: 'white'}}/>
            </Stack>
        </Link>
    </Stack>
)

export default SecondRow