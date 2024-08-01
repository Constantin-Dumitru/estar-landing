import React from 'react'
import { Typography } from '@mui/material'
import BlurContainer from '../../../components/BlurContainer'
import { EstarLogo } from '../../../shared/icons'

const NavBar: React.FC = () => (
    <BlurContainer
        sx={{
            width: '100%',
            flexDirection: 'row',
            borderRadius: '20px',
            padding: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <EstarLogo sx={{ fill: "#F4C501", height: '24px', width: 'auto' }}/>
        <Typography>Pula</Typography>
    </BlurContainer>
)

export default NavBar