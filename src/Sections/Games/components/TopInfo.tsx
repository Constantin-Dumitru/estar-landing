import React from 'react'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SectionTitle from '../../../components/SectionTitle'
import BlurContainer from '../../../components/BlurContainer'

const TopInfo: React.FC = () => (
    <Stack
        sx={{
            flexDirection: 'row',
            alignItems: {
                xs: 'center',
                md: 'flex-start',
            },
            justifyContent: {
                xs: 'center',
                md: 'space-between',
            },
            width: '100%'
        }}
    >
        <Stack spacing={-2}>
            <SectionTitle 
                    firstWord="FEATURED"
                    secondWord="GAMES"
                    sx={{
                        flexDirection: {
                            xs: 'row',
                            md: 'column',
                        },
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
                borderRadius: '20px',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
        >
            <Typography>
                Powered By <span style={{color: '#F4C501'}}>ESTAR</span> Team
            </Typography>
        </BlurContainer>
    </Stack>
)

export default TopInfo