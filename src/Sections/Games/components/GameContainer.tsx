import React from 'react'
import { Stack } from '@mui/material'
import FirstRow from './GameContainerComponents/FirstRow'
import SecondRow from './GameContainerComponents/SecondRow'

interface Props{
    gameStage: string
    gamePhoto: string
    gameName: string
    gameDescription: string
    gameLink?: string | null
}

const GameContainer: React.FC<Props> = ({gamePhoto, gameStage, gameName, gameDescription, gameLink = null}) => (
    <Stack
        sx={{
            width: {
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(33.3% - 16px)',
                lg: 'calc(25% - 16px)'
            },
            aspectRatio: '1 / 1',
            height: 'auto',
            // background: 'red',
            borderRadius: '20px',
            border: '2px solid #FFFFFF33',
            overflow: 'hidden'
        }}
    >
        <FirstRow gamePhoto={gamePhoto} gameStage={gameStage}/>
        <SecondRow gameName={gameName} gameDescription={gameDescription} gameLink={gameLink} />
    </Stack>
)

export default GameContainer