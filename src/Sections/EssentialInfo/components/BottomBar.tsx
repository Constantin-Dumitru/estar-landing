import React from 'react'
import { Stack } from '@mui/material'
import Socials from './Socials'
import ScrollDown from './ScrollDown'

const BottomBar: React.FC = () => (
    <Stack
        sx={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
            // background: 'red'
        }}
    >
        <Socials />
        <ScrollDown />
    </Stack>
)

export default BottomBar