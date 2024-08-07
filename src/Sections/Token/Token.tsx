import React from 'react'
import { Grid } from '@mui/material'
import SectionTitle from '../../components/SectionTitle'
import { TokenSchema } from '../../shared/assets'
import GridPattern from './../../shared/images/nice-grid-pattern.png'
import BottomInformation from './components/BottomInformation'

const Token: React.FC = () => (
    <Grid
        container
        sx={{
            background: `radial-gradient(62.37% 62.37% at 50% 50%, rgba(0,0,0,0) 0%, #0F2A71 100%), url(${GridPattern})`,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: {
                xs: '32px',
                md: '32px 0px'
            }
        }}
    >
        <Grid
            item
            container
            xs={12}
            md={10}
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: '64px',
                flexDirection: 'column'
            }}
        >
            <SectionTitle
                firstWord='$ESTAR'
                secondWord='TOKEN'
                sx={{
                    flexDirection: 'row',
                    gap: '16px',
                }}
            />
            <TokenSchema sx={{ width: '100%', height: 'auto'}}/>
            <BottomInformation />
        </Grid>
    </Grid>
)

export default Token