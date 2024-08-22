import React from 'react'
import BlurContainer from '../../../components/BlurContainer'
import { EstarLogo } from '../../../shared/icons'
import NavLinks from './NavLinks'

const NavBar: React.FC = () => (
    <BlurContainer
        sx={{
            width: '100%',
            flexDirection: 'row',
            borderRadius: '1.25rem',
            padding: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <EstarLogo sx={{ fill: "#F4C501", height: '24px', width: 'auto' }}/>
        <NavLinks />
    </BlurContainer>
)

export default NavBar