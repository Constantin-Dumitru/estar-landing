import React from 'react'
import { Grid } from '@mui/material'
import NavBar from './components/NavBar'
import BottomBar from './components/BottomBar'
import GridBackground from '../../components/GridBackground'
import Title from './components/Title'
import { Console, Chair, Headphones } from '../../shared/assets'
import ShortInformation from './components/ShortInformation'

const EssentialInfo: React.FC = () => (
    <>
    <Grid
        container
        sx={{
            width: '100vw',
            height: 'max-content',
            background: 'linear-gradient(241.42deg, #0F2A71 -10.17%, #00173F 87.1%)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: {
                xs: '32px 0px 0px 0px',
                md: '32px 0px 0px 0px'
            },
            position: 'relative',
            overflow: 'hidden'
            // background: 'red',
            // minHeight: '100vh !important'
        }}
    >
        <Grid
            item
            container
            xs={12}
            md={10}
            sx={{
                // width: '100%',
                height: 'calc(100vh - 32px)',
                justifyContent: 'space-between',
                flexDirection: 'column',
                // background: 'red',
                alignItems: 'center',
                zIndex: '2',
                position: 'relative',
                padding: {
                    xs: '0px 32px 0px 32px',
                    md: '0px'
                }
            }}
        >
            <NavBar />
            <Title />
            <BottomBar />
        </Grid>
        <Grid
            item
            container
            xs={12}
            // md={10}
            sx={{
                height: 'max-content',
                zIndex: '2',
                // marginTop: '32px'
            }}
        >
            <ShortInformation />
        </Grid>
        <Console
            sx={{
                position: 'absolute',
                zIndex: '1',
                right: '-64px',
                top: '64px',
                transform: 'rotate(20deg) scaleX(-1)',
                height: '264px',
                width: 'auto'
            }}
        />
        <Chair
            sx={{
                position: 'absolute',
                zIndex: '1',
                right: '-60px',
                bottom: '10px',
                // transform: 'rotate(21deg)',
                height: '544px',
                width: 'auto',
                // background: 'green'
            }}
        />
        <Headphones
            sx={{
                position: 'absolute',
                zIndex: '1',
                left: '-64px',
                bottom: '52px',
                transform: 'rotate(10deg)',
                height: 'clamp(202px, 50vh, 502px)',
                width: 'auto',
                // background: 'red'
            }}
        />
        <GridBackground />
    </Grid>
    </>
)

export default EssentialInfo