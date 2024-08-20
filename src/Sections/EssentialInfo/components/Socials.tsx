import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TwitterIcon, DiscordIcon, TelegramIcon } from '../../../shared/icons'
import BlurContainer from '../../../components/BlurContainer'

const Socials: React.FC = () => (
    <BlurContainer
        sx={{
            gap: '16px',
            alignItems: 'center',
            padding: '16px',
            borderRadius: '20px',
            display: {
                xs: 'none',
                md: 'flex'
            }
        }}
    >
        <Typography color={'#F4C501'}>
            SOCIALS LINK
        </Typography>
        <Stack
            sx={{
                gap: '16px',
                flexDirection: 'row',
                '>*': {
                    fill: 'white',
                    cursor: 'pointer',
                    height: '24px',
                    width: 'auto',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        fill: '#F4C501'
                    }
                }
            }}
        >
            <TwitterIcon />
            <DiscordIcon />
            <TelegramIcon />
        </Stack>
    </BlurContainer>
)

export default Socials