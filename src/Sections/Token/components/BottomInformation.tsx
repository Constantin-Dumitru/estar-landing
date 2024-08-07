import React from 'react'
import { Typography } from '@mui/material'
import BlurContainer from '../../../components/BlurContainer'
import Information from './Information'

const BottomInformation: React.FC = () => (
    <BlurContainer
        sx={{
            padding: '16px',
            borderRadius: '16px',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center'
        }}
    >
        <Information title='TOKEN INFO' subtitle='ESTAR 461-BAB'/>
        <Information title='max supply' subtitle='99,056,904'/>
        <Information title='Circulation Supply' subtitle='93,038,283.42'/>
        <Information title='FD Market cap' subtitle='$ 47,303.45'/>
    </BlurContainer>
)

export default BottomInformation