import React from 'react'
import { Grid, Typography } from '@mui/material'
import { EstarLogo } from '../../shared/icons'
import NavBar from './components/NavBar'
import BottomBar from './components/BottomBar'
import GridBackground from '../../components/GridBackground'

const EssentialInfo: React.FC = () => (
    <Grid
        container
        sx={{
            width: '100vw',
            height: '100dvh',
            background: 'linear-gradient(241.42deg, #0F2A71 -10.17%, #00173F 87.1%)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: {
                xs: '32px',
                md: '32px 0px'
            },
            position: 'relative'
        }}
    >
        <Grid
            item
            container
            xs={12}
            md={10}
            sx={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                flexDirection: 'column',
                // background: 'red',
                alignItems: 'center',
                zIndex: '1'
            }}
        >
            <NavBar />
            <BottomBar />
        </Grid>
        <GridBackground />
    </Grid>
)

export default EssentialInfo