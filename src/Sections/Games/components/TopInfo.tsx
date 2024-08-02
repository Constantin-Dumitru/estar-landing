import React from 'react'
import { Stack, Typography } from '@mui/material'
import SectionTitle from '../../../components/SectionTitle'
import BlurContainer from '../../../components/BlurContainer'

const TopInfo: React.FC = () => (
    <Stack
        sx={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%'
        }}
    >
        <Stack spacing={-2}>
            <SectionTitle 
                    firstWord="FEATURED"
                    secondWord="GAMES"
                    sx={{
                        flexDirection: 'column',
                    }}
                    spacing={-4}
                />
            <Typography
                sx={{
                    color: '#999',
                    // background: 'red',
                    maxWidth: '460px'
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Typography>
        </Stack>
        <BlurContainer
            sx={{
                padding: '16px',
                borderRadius: '20px'
            }}
        >
            <Typography>
                Powered By <span style={{color: '#F4C501'}}>ESTAR</span> Team
            </Typography>
        </BlurContainer>
    </Stack>
)

export default TopInfo